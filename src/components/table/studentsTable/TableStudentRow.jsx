import { useState } from 'react';
import { nanoid } from 'nanoid';

import IconTriangle from '../../iconTriangle/IconTriangle';

const scoreColor = {
  '100%': 'blue',
  '90%': 'blue',
  '80%': 'green',
  '70%': 'yellow',
  '60%': 'yellow',
  '50%': 'red',
};

const expectColor = {
  'Below Expected': 'red',
  'As Expected': 'green',
  'Above Expected': 'blue',
};

const getColor = score => {
  const value = Math.floor(parseInt(score) / 10) * 10;
  const scoreValue = value < 50 ? '50%' : `${value}%`;
  return scoreColor[scoreValue];
};

const TableStudentRow = ({ name, id, class: studentClass, score, speed, parents, tests }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };
  const checkboxId = nanoid();
  return (
    <>
      <tr className="TableBodyRow">
        <td className="TableData">
          <input className="checkbox" id={checkboxId} type="checkbox" />
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
            <div>
              {tests.map((test, idx) => (
                <div key={idx}>
                  <div>{test.label}</div>
                  <div>{test.score}</div>
                  <div>{test.speed}</div>
                  <div>{test.total}</div>
                  <div>{test.concept}</div>
                  <div>{test.date}</div>
                  <div>{test.abcent}</div>
                </div>
              ))}
              <p>Info</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableStudentRow;
