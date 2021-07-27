import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InformationList = props => {

  useEffect(() => {
    axios.get('/users/1/containers/1/categories/1/identifiers/1/information')
        .then(res => setInformation(res.data))
      }, []);

  const [information, setInformation] = useState([]);

  return (
      <div>
        <div className="information-list">
          {information.map((information, index) => (
              <div key={index}>
                {information.infoTitle} | {information.info}
              </div>
            ))}
        </div>
      </div>
  )
};

export default InformationList;