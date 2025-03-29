import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';
import SortSelect from '../components/SortSelect';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState('');

  const fetchProducts = async () => {
    let url = '';
    if (searchQuery) {
      url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchQuery}&page=${page}&json=true&action=process`;
    } else if (selectedCategory) {
      url = `https://world.openfoodfacts.org/category/${selectedCategory}.json?page=${page}&json=true`;
    } else {
      url = `https://world.openfoodfacts.org/cgi/search.pl?page=${page}&json=true&action=process`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data.products || data.products.length === 0) {
        setProducts([]);
        return;
      }

      const newProducts = data.products.map((product) => ({
        code: product.code,
        product_name: product.product_name || 'Unnamed Product',
        brands: product.brands || 'Unknown',
        image_url: product.image_url || 'https://via.placeholder.com/150',
        nutrition_grade: product.nutrition_grades || 'N/A',
      }));

      setProducts((prev) => (page === 1 ? newProducts : [...prev, ...newProducts]));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory, page]);

  const applySorting = (productsList) => {
    let sortedProducts = [...productsList];

    if (sortOption === "name_asc") {
      sortedProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
    } else if (sortOption === "name_desc") {
      sortedProducts.sort((a, b) => b.product_name.localeCompare(a.product_name));
    } else if (sortOption === "grade_asc") {
      sortedProducts.sort((a, b) => (a.nutrition_grade || 'z').localeCompare(b.nutrition_grade || 'z'));
    } else if (sortOption === "grade_desc") {
      sortedProducts.sort((a, b) => (b.nutrition_grade || 'a').localeCompare(a.nutrition_grade || 'a'));
    }

    return sortedProducts;
  };

  return (
    <div className="home-container">
      <h1>Food Product Explorer</h1>
      <div className="search-filter-container">
        <SearchBar onSearch={(query) => { setPage(1); setSearchQuery(query); }} />
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={(category) => { setPage(1); setSelectedCategory(category); }} />
        <SortSelect onSortChange={(option) => { setSortOption(option); }} />
      </div>
      <ProductList products={applySorting(products)} />
      <div className="load-more">
        <button onClick={() => setPage(prevPage => prevPage + 1)}>Load More</button>
      </div>
    </div>
  );
};

export default Home;
