import React from 'react';

import sprite from '../../images/sprite.svg';
import { FilterStyled } from './FilterStyled';

const Filter = ({ filter, setFilter }) => {
  const onHandleInputChange = event => {
    setFilter({ ...filter, query: event.target.value });
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    // onChange(query);
    setFilter('');
  };

  return (
    <FilterStyled onSubmit={onHandleSubmit}>
      <input
        className="FilterQuery"
        value={filter.query}
        onChange={onHandleInputChange}
        placeholder="Enter Student Name, Parent or ID here"
      />
      <svg className="SearchIcon" width="16" height="16">
        <use href={sprite + '#icon-search'}></use>
      </svg>
    </FilterStyled>
  );
};

export default Filter;
