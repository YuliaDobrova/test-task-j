import React from 'react';
import IconTriangle from '../../iconTriangle/IconTriangle';
import '../studentsTable/StudentsTableStyled';
import { nanoid } from 'nanoid';

const ArchiveTable = ({ students, columnNames }) => {
  const checkboxId = nanoid();
  return (
    <table className="Table" cellSpacing="0" style={{ marginTop: 5 }}>
      <thead className="TableHeading">
        <tr className="TableHeadingRow" align="left">
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
          (student, index) =>
            index < 2 && (
              <tr className="TableBodyRow" key={index}>
                <td className="TableData">
                  <input className="checkbox" id={checkboxId} type="checkbox" />
                  <label htmlFor={checkboxId} />
                </td>
                <td className="TableData disabledColor">{Object.values(student)[0]}</td>
                <td className="TableData disabledColor">{Object.values(student)[1]}</td>
                <td className="TableData disabledColor">{Object.values(student)[2]}</td>
                <td className="TableData disabledColor">{Object.values(student)[3]}</td>
                <td className="TableData disabledColor">{Object.values(student)[4]}</td>
                {/* Parents */}
                {!Object.values(student)[5] === null ? (
                  <td className="TableData disabledColor" align="left">
                    No Parents Added
                  </td>
                ) : (
                  <td className="TableData disabledColor" align="left">
                    {Object.values(student)[5].map((parent, idx) =>
                      idx === 0 ? `${parent}, ` : `${parent}`,
                    )}
                    <IconTriangle onClick={() => {}} additionalClassName="nearParentsText" />
                  </td>
                )}
              </tr>
            ),
        )}
      </tbody>
    </table>
  );
};

export default ArchiveTable;
