import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="card">
            <img src={item.avatar} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.address}</p>
        </div>
    );
};

export default Card;