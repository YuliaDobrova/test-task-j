import React from 'react';
import sprite from '../../images/sprite.svg';
import { StudentsInfoStyled } from './StudentsInfoStyled';

const StudentsInfo = () => {
  return (
    <StudentsInfoStyled>
      <h1 className="StudentsInfoTitle">Students</h1>
      <label className="FilterWrapper">
        <input className="Filter" placeholder="Enter Student Name, Parent or ID here" />
        <svg className="SearchIcon" width="16" height="16">
          <use href={sprite + '#icon-search'}></use>
        </svg>
      </label>
      <div className="ExportBtnWrapper">
        <svg className="ExportIcon" width="16" height="16">
          <use href={sprite + '#icon-export-arrow'}></use>
        </svg>
        <button className="ExportBtn">Export CSV</button>
      </div>
    </StudentsInfoStyled>
  );
};

export default StudentsInfo;
