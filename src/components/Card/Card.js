import React from 'react';
import "../../styles/style.css";

const Card = ({ item }) => {
    return (
        <div className='card-container'>
        <div className="card">
            <img src={item.avatar} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.address}</p>
        </div>
        </div>
    );
};

export default Card;