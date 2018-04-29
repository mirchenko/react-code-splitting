import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ name, flag, capital, population })  => {
  return (
    <NavLink to={`/${name}`} className="countries-item">
      <img src={flag} alt=""/>
      <div className="countries-item-data">
        <h4>{name}</h4>
        <span>{capital}</span>
        <span>{population} pop.</span>
      </div>
    </NavLink>
  );
};