import React from 'react';

const Category = ({ category }) => {
  return (
    <div className="category">
      <img src={category.avatar} alt={category.name} />
      <p>{category.address}</p>
    </div>
  );
};

export default Category;