import React from 'react';
import './SearchBar.css';
const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Rechercher une tâche"
  />
);

export default SearchBar;