import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IdentifierList = props => {

  useEffect(() => {
    axios.get('/users/1/containers/1/categories/1/identifiers')
        .then(res => setIdentifiers(res.data))
      }, []);

  const [identifiers, setIdentifiers] = useState([]);

  return (
      <div>
        <div className="Identifier-list">
          {identifiers.map((identifier, index) => (
              <div key={index}>
                {identifier.title}
              </div>
            ))}
        </div>
      </div>
  )
};

export default IdentifierList;