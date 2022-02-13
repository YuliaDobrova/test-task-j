import React from 'react';

import sprite from '../../images/sprite.svg';
import { FilterStyled } from './FilterStyled';

const Filter = ({ search, setSearch }) => {
  // const onHandleInputChange = event => {
  //   setSearch({ ...search, query: event.target.value });
  // };

  // const onHandleSubmit = event => {
  //   event.preventDefault();
  //   // onChange(query);
  //   setSearch('');
  // };

  return (
    <FilterStyled>
      <input
        className="FilterQuery"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Enter Student Name, Parent or ID here"
      />
      <svg className="SearchIcon" width="16" height="16">
        <use href={sprite + '#icon-search'}></use>
      </svg>
    </FilterStyled>
  );
};

export default Filter;
