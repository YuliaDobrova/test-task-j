import React from 'react';
import sprite from '../../images/sprite.svg';
import { usePagination } from '../../hooks/usePagination';
import IconTriangle from '../iconTriangle/IconTriangle';
import { PaginationStyled } from './PaginationStyled';
// import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, onChangePage, limit, setLimit, onOpenPages }) => {
  // let pagesArray = getPagesArray(totalPages);
  let pagesArray = usePagination(totalPages);
  return (
    <PaginationStyled>
      <p className="PaginationText1">Rows per page:</p>
      {pagesArray.map(p => (
        <span
          onClick={() => onChangePage(p)}
          key={p}
          className={page === p ? `pageBtnCurrent` : `pageBtn`}
        >
          {p}
        </span>
      ))}
      <div className="PaginationSelectWrapper">
        <select
          className="PaginationSelect select-arrow-delete"
          value={limit}
          onChange={value => setLimit(value)}
          // defaultValue="Number of posts on a page"

          // options={[
          //   { value: 10, name: '10' },
          //   { value: 20, name: '20' },
          //   { value: 100, name: 'Show all' },
          // ]}
        >
          <option className="PaginationSelectOption">10</option>
          <option className="PaginationSelectOption">20</option>
        </select>
        <IconTriangle onOpenPages={onOpenPages} additionalClassName="nearPagesSelect" />
      </div>
      <p className="PaginationText2">21-30 of 100</p>
      <div className="PageArrowWrapper">
        <svg className="PageArrowLeft" width="10" height="16" onClick={() => {}}>
          <use href={sprite + '#icon-arrow-left'}></use>
        </svg>
        <svg className="PageArrowRight" width="10" height="16" onClick={() => {}}>
          <use href={sprite + '#icon-arrow-right'}></use>
        </svg>
      </div>
    </PaginationStyled>
  );
};

export default Pagination;
