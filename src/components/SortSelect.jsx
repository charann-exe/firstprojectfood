import React from 'react';
import './SortSelect.css';

const SortSelect = ({ onSortChange }) => {
  return (
    <select onChange={(e) => onSortChange(e.target.value)} className="sort-select">
      <option value="">Sort By</option>
      <option value="name_asc">Name: A to Z</option>
      <option value="name_desc">Name: Z to A</option>
      <option value="grade_asc">Nutrition Grade: A to E</option>
      <option value="grade_desc">Nutrition Grade: E to A</option>
    </select>
  );
};

export default SortSelect;
