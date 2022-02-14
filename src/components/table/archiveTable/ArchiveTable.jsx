import React from 'react';

import TableArchiveRow from './TableArhiveRow';
import '../studentsTable/StudentsTableStyled';

const ArchiveTable = ({ students, columnNames }) => {
  return (
    <table className="Table" cellSpacing="0" style={{ marginTop: 5 }}>
      <thead className="TableHeading">
        <tr className="TableHeadingRow">
          <th className="TableHeadingData" style={{ position: 'absolute', top: 15, left: 15 }}>
            ARCHIVED
          </th>
          {columnNames.map((headerItem, index) => (
            <th className="TableHeadingData" key={index} style={{ color: 'transparent' }}>
              {headerItem.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="TableBody">
        {students.map(
          (student, index) => index < 2 && <TableArchiveRow key={index} {...student} />,
        )}
      </tbody>
    </table>
  );
};

export default ArchiveTable;
