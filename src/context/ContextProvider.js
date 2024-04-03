import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [searchName, setSearchName] = useState(false);
    const [dataDummy, setDataDummy] = useState([]);
    const [searchAddress, setSearchAddress] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://65ffa099df565f1a614527ba.mockapi.io/api/v1/category');
            const jsonData = await response.json();
            setData(jsonData);
            setDataDummy(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onSearch = (nameValue, addressValue) => { //เพิ่ม parameter nameValue&addressValue
        console.log(nameValue);
        console.log(addressValue);
        const results = dataDummy.filter(obj => {

            if (nameValue && addressValue) {
                return obj.name.toLowerCase().includes(nameValue.toLowerCase()) &&
                obj.address.toLowerCase().includes(addressValue.toLowerCase()); //ค้นหา name/address พร้อมกัน
            }
            else if (nameValue) {
                return obj.name.toLowerCase().includes(nameValue.toLowerCase()); //ค้นหา name
            }
            else if (addressValue) {
                return obj.address.toLowerCase().includes(addressValue.toLowerCase()); //ค้นหา address 
            }
            else {
                return false;
            }
        })
        console.log(results);
        setData(results);
    }

    return (
        <DataContext.Provider value={{ data, onSearch, setSearchName, setSearchAddress }}>
            {children}
        </DataContext.Provider>
    );
};

export default ContextProvider;