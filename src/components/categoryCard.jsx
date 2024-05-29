import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <li>
      <a href={category.linkTo}>
        <img src={category.imgSrc} alt={category.name} />
      </a>
      <h6>{category.name}</h6>
    </li>
  );
};

export default CategoryCard;