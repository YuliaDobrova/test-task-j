import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { expectColor } from '../../../table/studentsTable/table-data';

const CollapseTableRow = ({
  index,
  label,
  score,
  speed,
  total,
  expSpeed,
  concept,
  date,
  abcent,
  absent,
  getColor,
}) => {
  const checkboxId = nanoid();

  const selected = typeof abcent === 'boolean' ? abcent : absent;

  const fullClassName = selected ? 'CollapseTableData disabledColor' : 'CollapseTableData';

  // console.log('abcent', abcent);
  return (
    <tr className="CollapseTableBodyRow">
      <td className="CollapseTableData">{index + 1}.</td>
      <td className={fullClassName}>{label}</td>
      <td className={fullClassName}>
        <span className={getColor(score)}>{score}</span>
      </td>
      <td className={fullClassName}>
        <span className={expectColor['Below Expected']}>{speed}</span>
      </td>
      <td className={fullClassName}>{total}</td>
      <td className={fullClassName}>{expSpeed}</td>
      <td className={fullClassName}>{concept}</td>
      <td className={fullClassName}>{date}</td>
      <td className="CollapseTableData">
        <input
          className="checkbox checked"
          id={checkboxId}
          type="checkbox"
          defaultChecked={selected}
        />
        <label htmlFor={checkboxId} />
      </td>
    </tr>
  );
};

export default CollapseTableRow;

CollapseTableRow.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  speed: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  expSpeed: PropTypes.string.isRequired,
  concept: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  abcent: PropTypes.bool,
  absent: PropTypes.bool,
  getColor: PropTypes.func,
};
