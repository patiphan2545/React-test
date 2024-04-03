import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/ContextProvider';

const Filter = () => {
    const { onSearch } = useContext(DataContext);
    const [inputName, setInputName] = useState("");
    const [inputAddress, setInputAddress] = useState("");

    const handleSearch = () => {
        onSearch(inputName, inputAddress);
    };

    return (
        <div className="filter">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search name..."
                    value={inputName}
                    onChange={e => setInputName(e.target.value)}
                />
                </div>
                <div className='search-address'>
                <input
                    type="text"
                    placeholder="Search address..."
                    value={inputAddress}
                    onChange={e => setInputAddress(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                </div>
        </div>
    );
};

export default Filter;
