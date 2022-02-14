import React from 'react';
import { nanoid } from 'nanoid';
import IconTriangle from '../../iconTriangle/IconTriangle';

const TableArhiveRow = ({ name, id, class: studentClass, score, speed, parents, tests }) => {
  const checkboxId = nanoid();
  return (
    <tr className="TableBodyRow">
      <td className="TableData">
        <input className="checkbox" id={checkboxId} type="checkbox" />
        <label htmlFor={checkboxId} />
      </td>
      <td className="TableData disabledColor">{name}</td>
      <td className="TableData disabledColor">{id}</td>
      <td className="TableData disabledColor">{studentClass}</td>
      <td className="TableData disabledColor">{score}</td>
      <td className="TableData disabledColor">{speed}</td>
      {!parents.length ? (
        <td className="TableData disabledColor">No Parents Added</td>
      ) : (
        <td className="TableData disabledColor">{parents.join(', ')}</td>
      )}
      <td className="TableDataTriagleWrapper">
        <IconTriangle additionalClassName="nearParentsText" />
      </td>
    </tr>
  );
};

export default TableArhiveRow;
