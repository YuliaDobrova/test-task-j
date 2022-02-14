import React from 'react';
import PropTypes from 'prop-types';

import { columnNames } from './collapse-table-data';
import CollapseTableRow from './collapseTableRow/CollapseTableRow';
import { CollapseTableStyled } from './CollapseTableStyled';

const CollapseTable = ({ tests, getColor }) => {
  return (
    <CollapseTableStyled>
      <table className="CollapseTable" cellSpacing="0" style={{ marginTop: 5 }}>
        <thead className="CollapseTableHeading">
          <tr className="CollapseTableHeadingRow">
            {columnNames.map((headerItem, index) => (
              <th className="CollapseTableHeadingData" key={index}>
                {headerItem.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="CollapseTableBody">
          {tests.map((test, index) => (
            <CollapseTableRow key={index} {...test} index={index} getColor={getColor} />
          ))}
        </tbody>
      </table>
    </CollapseTableStyled>
  );
};

export default CollapseTable;

CollapseTable.propTypes = {
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
  getColor: PropTypes.func,
};
