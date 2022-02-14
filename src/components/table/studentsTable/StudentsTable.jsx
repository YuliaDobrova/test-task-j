import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import ArchiveTable from '../archiveTable/ArchiveTable';
import Pagination from '../../pagination/Pagination';
import { columnNames } from './table-data.js';
import { StudentsTableStyled } from './StudentsTableStyled';
import TableStudentRow from './TableStudentRow';

const StudentsTable = ({
  students,
  page,
  onChangePage,
  totalPages,
  limit,
  setLimit,
  changeSort,
  toggleSelectStudent,
}) => {
  const sortOptions = ['name', 'class', 'score', 'speed'];
  const sortTable = field => {
    if (sortOptions.includes(field)) {
      changeSort(field);
    }
  };

  const checkboxId = nanoid();

  return (
    <StudentsTableStyled>
      {students.length > 0 && (
        <>
          <table className="Table" cellSpacing="0">
            <thead className="TableHeading">
              <tr className="TableHeadingRow" align="left">
                <th className="TableHeadingData">
                  <input className="checkbox" id={checkboxId} type="checkbox" />
                  <label htmlFor={checkboxId} />
                </th>
                {columnNames.map((headerItem, index) => (
                  <th
                    className={`TableHeadingData ${headerItem.sortable ? 'sort' : ''}`}
                    key={index}
                    onClick={() => sortTable(headerItem.field)}
                  >
                    {headerItem.headerName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="TableBody">
              {students.map((student, index) => (
                <TableStudentRow
                  key={index}
                  {...student}
                  toggleSelectStudent={toggleSelectStudent}
                />
              ))}
            </tbody>
          </table>
          <ArchiveTable students={students} columnNames={columnNames} />
          <Pagination
            page={page}
            onChangePage={onChangePage}
            totalPages={totalPages}
            limit={limit}
            setLimit={setLimit}
            count={students.length}
          />
        </>
      )}
    </StudentsTableStyled>
  );
};

export default StudentsTable;

StudentsTable.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      class: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
      speed: PropTypes.string.isRequired,
      parents: PropTypes.arrayOf(PropTypes.string),
      tests: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          score: PropTypes.number.isRequired,
          speed: PropTypes.string.isRequired,
          total: PropTypes.number.isRequired,
          expSpeed: PropTypes.string.isRequired,
          concept: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          abcent: PropTypes.bool,
          absent: PropTypes.bool,
        }),
      ),
      toggleSelectStudent: PropTypes.func,
      selected: PropTypes.bool,
    }),
  ),
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func,
  totalPages: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func,
  changeSort: PropTypes.func,
  toggleSelectStudent: PropTypes.func,
};
