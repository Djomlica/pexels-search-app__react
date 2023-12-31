import { useState } from 'react';

import "./SearchBar.css";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        onSubmit(term);
    };

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

  return (
    <div className='search-bar'>
      <h1>Simple App for Displaying a PexelsAPI Pictures</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
