import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://65ffa099df565f1a614527ba.mockapi.io/api/v1/category');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onSearch = (value) => {
        setSearchValue(value);
    }

    useEffect(() => {
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
    }, [searchValue, data]);

    return (
        <DataContext.Provider value={{ data, onSearch, searchValue }}>
            {children}
        </DataContext.Provider>
    );
};

export default ContextProvider;