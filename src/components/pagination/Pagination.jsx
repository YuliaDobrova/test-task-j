import React from 'react';
import Select from 'react-select';

import sprite from '../../images/sprite.svg';
import IconTriangle from '../iconTriangle/IconTriangle';
import { PaginationStyled } from './PaginationStyled';

const options = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
];

const style = {
  control: base => ({
    ...base,
    border: 0,
    boxShadow: 'none',
  }),
};

const Pagination = ({ totalPages, page, onChangePage, limit, setLimit, onOpenPages }) => {
  return (
    <PaginationStyled>
      <p className="PaginationText1">Rows per page:</p>
      <div className="PaginationSelectWrapper">
        <Select
          className="PaginationSelect"
          options={options}
          placeholder={limit}
          styles={style}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          onChange={({ value }) => setLimit(value)}
        />

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
