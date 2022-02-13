import React from 'react';
import Select from 'react-select';

import sprite from '../../images/sprite.svg';
import IconTriangle from '../iconTriangle/IconTriangle';
import { PaginationStyled } from './PaginationStyled';


const options = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
];

const Pagination = ({ totalPages, page, onChangePage, limit, setLimit, onOpenPages }) => {
  return (
    <PaginationStyled>
      <p className="PaginationText1">Rows per page:</p>
      <div className="PaginationSelectWrapper">
        <Select options={options} onChange={({ value }) => setLimit(value)} />
        {/* <select
          className="PaginationSelect select-arrow-delete"
          // value={limit}
          onChange={value => setLimit(value)}
          defaultValue="5"
        >
          <option value={5} className="PaginationSelectOption">
            5
          </option>
          <option value={10} className="PaginationSelectOption">
            10
          </option>
        </select> */}
        <IconTriangle onOpenPages={onOpenPages} additionalClassName="nearPagesSelect" />
      </div>
      <p className="PaginationText2">
        {(page - 1) * limit + 1}-{page * limit} of {totalPages * limit}
      </p>
      <div className="PageArrowWrapper">
        <svg className="PageArrowLeft" width="10" height="16" onClick={() => onChangePage(-1)}>
          <use href={sprite + '#icon-arrow-left'}></use>
        </svg>
        <svg className="PageArrowRight" width="10" height="16" onClick={() => onChangePage(1)}>
          <use href={sprite + '#icon-arrow-right'}></use>
        </svg>
      </div>
    </PaginationStyled>
  );
};

export default Pagination;
