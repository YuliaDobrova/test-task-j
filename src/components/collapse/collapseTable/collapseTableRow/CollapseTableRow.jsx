import React from 'react';
import { nanoid } from 'nanoid';

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
  getColor,
}) => {
  const checkboxId = nanoid();
  return (
    <>
      {abcent ? (
        <tr className="CollapseTableBodyRow">
          <td className="CollapseTableData">{index + 1}.</td>
          <td className="CollapseTableData disabledColor">{label}</td>
          <td className="CollapseTableData disabledColor">{score}</td>
          <td className="CollapseTableData disabledColor">{speed}</td>
          <td className="CollapseTableData disabledColor">{total}</td>
          <td className="CollapseTableData disabledColor">{expSpeed}</td>
          <td className="CollapseTableData disabledColor">{concept}</td>
          <td className="CollapseTableData disabledColor">{date}</td>
          <td className="CollapseTableData">
            <input className="checkbox checked" id={checkboxId} type="checkbox" checked />
            <label htmlFor={checkboxId} />
          </td>
        </tr>
      ) : (
        <tr className="CollapseTableBodyRow">
          <td className="CollapseTableData">{index + 1}.</td>
          <td className="CollapseTableData">{label}</td>
          <td className="CollapseTableData">
            <span className={getColor(score)}>{score}</span>
          </td>
          <td className="CollapseTableData">
            <span className={expectColor['Below Expected']}>{speed}</span>
          </td>
          <td className="CollapseTableData">{total}</td>
          <td className="CollapseTableData">{expSpeed}</td>
          <td className="CollapseTableData">{concept}</td>
          <td className="CollapseTableData">{date}</td>
          <td className="CollapseTableData">
            <input className="checkbox" id={checkboxId} type="checkbox" />
            <label htmlFor={checkboxId} />
          </td>
        </tr>
      )}
    </>
  );
};

export default CollapseTableRow;
