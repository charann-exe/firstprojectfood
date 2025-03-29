Food Product Explorer
This project is a React application that allows users to search for and explore food products using the OpenFoodFacts API. The application provides several features, including searching by product name or barcode, filtering by category, and viewing detailed product information. Below is an overview of the methodology and components used to solve the problem.

Overview
The main goal of this project is to fetch and display food product data from the OpenFoodFacts API based on user input. Users can perform searches, filter by predefined categories, and view detailed information about a selected product. The application uses React functional components and hooks to manage state, handle asynchronous API calls, and update the user interface dynamically.

Methodology
1. Component-Based Architecture
Home Component:
Acts as the central hub of the application. It maintains state for products, search queries, selected categories, and pagination (page number). It triggers API calls based on the current state.

SearchBar Component:
Provides an input field for users to type in a search query. On form submission, it sends the query back to the Home component to update the product list.

CategoryFilter Component:
Offers a dropdown with a list of pre-defined categories (e.g., beverages, dairy, snacks, fruits, vegetables). Selecting a category updates the Home component to filter products accordingly.

ProductList Component:
Receives the list of products from the Home component and displays them in a grid layout. Each product is shown with an image, name, and brand.

ProductDetail Component:
When a user selects a product (by clicking on it), this component fetches detailed information using the product's barcode and displays ingredients, nutritional information, and labels.

SortSelect Component:
Although not yet fully integrated, this component is designed to allow sorting options (e.g., by name or nutritional grade) to be applied to the product list.

2. State Management and API Integration
State Management:
React hooks (useState, useEffect) are used to manage the state of products, search queries, selected categories, and pagination.

The page state supports "load more" functionality by incrementally fetching additional products when the user clicks the "Load More" button.

API Calls:
The application constructs dynamic API URLs based on whether a search query or category filter is active.

Search Query: If the user provides a search term, the API endpoint is constructed to search products using that term.

Category Filter: If a category is selected, the API URL targets the specific category.

Default Case: When no search or category is selected, a default API call fetches products.

Error Handling & Debugging:
Console logs are used throughout the code to output the API URLs and responses. This aids in debugging and ensures that the correct data is fetched from the API.

3. User Experience Enhancements
Load More Functionality:
A button allows users to increment the page number, effectively loading more products into the view.

Placeholder Images:
If a product does not have an image, a placeholder image is used to maintain layout consistency.

Responsive Filtering:
Both search queries and category changes reset the pagination, ensuring that users always see fresh, relevant results.

File Structure
Home.jsx:
The main component that orchestrates API calls and handles state for search, category filtering, and pagination.

ProductDetail.jsx:
Fetches and displays detailed information for a single product based on its barcode.

SearchBar.jsx:
Renders the search input and handles form submission for product queries.

ProductList.jsx:
Maps through the fetched product list and renders each product using a simple card layout.

CategoryFilter.jsx:
Displays a dropdown of categories for filtering the product list.

SortSelect.jsx:
Provides sorting options for future enhancements (sorting functionality not yet integrated with product fetching).

Setup and Installation
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/yourusername/food-product-explorer.git
cd food-product-explorer
Install Dependencies:
Use npm or yarn to install the necessary packages.

bash
Copy
Edit
npm install
# or
yarn install
Start the Development Server:

bash
Copy
Edit
npm start
# or
yarn start
This command runs the app in development mode and opens http://localhost:3000 in your browser.

Build for Production:
To create an optimized production build, run:
Time taken to complete assignment 4 hours

bash
Copy
Edit
npm run build
# or
yarn build
Time taken to complete 4 hours
