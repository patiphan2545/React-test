import React from 'react';
import ContextProvider from './context/ContextProvider';
import List from './components/List/List';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
    return (
        <ContextProvider>
            <div className="App">
                <Filter />
                <List />
            </div>
        </ContextProvider>
    );
}

export default App;