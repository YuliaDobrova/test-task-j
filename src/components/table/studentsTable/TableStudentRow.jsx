import { useState } from 'react';
import { nanoid } from 'nanoid';

import { scoreColor, expectColor } from './table-data.js';
import IconTriangle from '../../iconTriangle/IconTriangle';
import Collapse from '../../collapse/Collapse';

const getColor = score => {
  const value = Math.floor(parseInt(score) / 10) * 10;
  const scoreValue = value < 50 ? '50%' : `${value}%`;
  return scoreColor[scoreValue];
};

const TableStudentRow = ({
  index,
  name,
  id,
  class: studentClass,
  score,
  speed,
  parents,
  tests,
  toggleSelectStudent,
  selected = false,
}) => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  const toggleCheckbox = () => {
    toggleSelectStudent(index, !selected);
  };

  const checkboxId = nanoid();
  return (
    <>
      <tr className={`TableBodyRow ${selected ? 'selectedRow' : ''}`}>
        <td className="TableData">
          <input
            className="checkbox"
            id={checkboxId}
            type="checkbox"
            checked={selected}
            onChange={toggleCheckbox}
          />
          <label htmlFor={checkboxId} />
        </td>

        <td className="TableData">{name}</td>
        <td className="TableData">{id}</td>
        <td className="TableData">{studentClass}</td>
        <td className="TableData">
          <span className={getColor(score)}>{score}</span>
        </td>
        <td className="TableData">
          <span className={expectColor[speed]}>{speed}</span>
        </td>
        {!parents.length ? (
          <td className="TableData">No Parents Added</td>
        ) : (
          <td className="TableData">{parents.join(', ')}</td>
        )}
        <td className="TableDataTriagleWrapper">
          <IconTriangle toggleCollapse={toggleCollapse} additionalClassName="nearParentsText" />
        </td>
      </tr>
      {collapse && (
        <tr>
          <td colSpan="8">
            <Collapse
              name={name}
              id={id}
              score={score}
              speed={speed}
              tests={tests}
              getColor={getColor}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default TableStudentRow;
