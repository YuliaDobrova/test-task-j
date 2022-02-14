import React from 'react';
import { CSVLink } from 'react-csv';

import sprite from '../../images/sprite.svg';
import { ExportButtonStyled } from './ExportButtonStyled';

const headers = [
  { label: 'Name', key: 'name' },
  { label: 'Class', key: 'class' },
  { label: 'ID', key: 'id' },
  { label: 'Score', key: 'score' },
  { label: 'Speed', key: 'speed' },
];

const ExportButton = ({ additionalClassName = '', selectStudents = [] }) => {
  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: selectStudents,
  };

  return (
    <>
      <ExportButtonStyled>
        <button className={`ExportBtn ${additionalClassName}`}>
          <CSVLink {...csvReport} className={`ExportBtn ${additionalClassName}`}>
            Export CSV
            <svg className={`ExportIcon ${additionalClassName}`} width="16" height="16">
              <use href={sprite + '#icon-export-arrow'}></use>
            </svg>
          </CSVLink>
        </button>
      </ExportButtonStyled>
    </>
  );
};

export default ExportButton;
