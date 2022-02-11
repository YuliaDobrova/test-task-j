import React from 'react';

import sprite from '../../images/sprite.svg';
import { FilterStyled } from './FilterStyled';

const Filter = () => {
  return (
    <FilterStyled>
      <input className="Filter" placeholder="Enter Student Name, Parent or ID here" />
      <svg className="SearchIcon" width="16" height="16">
        <use href={sprite + '#icon-search'}></use>
      </svg>
    </FilterStyled>
  );
};

export default Filter;
