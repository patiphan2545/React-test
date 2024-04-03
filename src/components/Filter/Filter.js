import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/ContextProvider';

const Filter = () => {
    const { data, onSearch, searchValue } = useContext(DataContext);
    const [inputValue, setInputValue] = useState("");

    const handleChange = e => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        onSearch(inputValue);
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="filter">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={handleChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="filtered-results">
                {filteredData.map(item => (
                    <div key={item.id}>
                        <img src={item.avatar} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
