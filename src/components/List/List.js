import React, { useContext } from 'react';
import { DataContext } from '../../context/ContextProvider';
import Card from '../Card/Card';

const List = () => {
    const { data } = useContext(DataContext);

    return (
        <div className="list">
            {data.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default List;