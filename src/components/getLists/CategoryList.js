import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriesList = props => {

  useEffect(() => {
    axios.get('/users/1/containers/1/categories')
        .then(res => setCategories(res.data))
      }, []);

  const [categories, setCategories] = useState([]);

  return (
      <div>
        <div className="category-list">
          {categories.map((category, index) => (
              <div key={index}>
                {category.name} | {category.description}
              </div>
            ))}
        </div>
      </div>
  )
};
export default CategoriesList;