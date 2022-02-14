import React from 'react';
import { CSVLink } from 'react-csv';

import sprite from '../../images/sprite.svg';
import { ExportButtonStyled } from './ExportButtonStyled';

// const exampleData = [
//   { firstName: 'Warren', lastName: 'Morrow', email: 'sokyt@mailinator.com', age: '36' },
//   { firstName: 'Gwendolyn', lastName: 'Galloway', email: 'weciz@mailinator.com', age: '76' },
//   { firstName: 'Astra', lastName: 'Wyatt', email: 'quvyn@mailinator.com', age: '57' },
//   { firstName: 'Jasmine', lastName: 'Wong', email: 'toxazoc@mailinator.com', age: '42' },
//   { firstName: 'Brooke', lastName: 'Mcconnell', email: 'vyry@mailinator.com', age: '56' },
// ];

const headers = [
  { label: 'Name', key: 'name' },
  { label: 'Class', key: 'class' },
  { label: 'ID', key: 'id' },
  { label: 'Score', key: 'score' },
  { label: 'Speed', key: 'speed' },
];

const ExportButton = ({ additionalClassName, selectStudents = [] }) => {
  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: selectStudents,
  };
  // console.log('selectStudents', selectStudents);
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
