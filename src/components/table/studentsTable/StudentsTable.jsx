import React from 'react';

import IconTriangle from '../../iconTriangle/IconTriangle';
import AccordionItem from '../../accordion/accordionItem/AccordionItem';
import ArchiveTable from '../archiveTable/ArchiveTable';
import Pagination from '../../pagination/Pagination';
import { StudentsTableStyled } from './StudentsTableStyled';

const StudentsTable = ({ students, page, onChangePage, totalPages, limit, setLimit }) => {
  const openAccordion = () => {};

  const columnNames = [
    { field: 'name', headerName: 'Name' },
    { field: 'id', headerName: 'ID' },
    { field: 'class', headerName: 'Class' },
    { field: 'score', headerName: 'Av. Score, %' },
    { field: 'speed', headerName: 'Av. Speed' },
    { field: 'parents', headerName: 'Parents' },
  ];

  return (
    <StudentsTableStyled>
      {students.length > 0 && (
        <>
          <table className="Table" cellSpacing="0">
            <thead className="TableHeading">
              <tr className="TableHeadingRow" align="left">
                <th className="TableHeadingData">
                  <input className="checkbox" id="TableHeadingCheckbox" type="checkbox" />
                  <label htmlFor="TableHeadingCheckbox" />
                </th>
                {columnNames.map((headerItem, index) => (
                  <th className="TableHeadingData" key={index}>
                    {headerItem.headerName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="TableBody">
              {students.map((student, index) => (
                <tr className="TableBodyRow" key={index}>
                  <td className="TableData">
                    <input className="checkbox" id="TableDataCheckbox" type="checkbox" />
                    <label htmlFor="TableDataCheckbox" />
                  </td>
                  {Object.values(student).map(
                    (value, idx) =>
                      idx < 3 && (
                        <td className="TableData" key={idx} align="left">
                          {value}
                        </td>
                      ),
                  )}
                  {/* Нужно класс добавить как-то, не понимаю как это сделать */}
                  {/* Av. Score, % */}
                  <td className="TableData">{Object.values(student)[3]}</td>
                  {/* >= 90% === blue  */}
                  {/* >=80% && <=89% === green  */}
                  {/* >=50% && <=79% === yellow */}
                  {/* <=79% === red */}
                  {/* Av. Speed */}
                  <td className="TableData">
                    {/* "Below Expected" === red  */}
                    {/* "As Expected" === green  */}
                    {/* "Above Expected" === blue */}
                    {Object.values(student)[4]}
                  </td>
                  {/* Parents */}
                  {!Object.values(student)[5] === null ? (
                    <td className="TableData" align="left">
                      No Parents Added
                    </td>
                  ) : (
                    <td className="TableData" align="left">
                      {Object.values(student)[5].map((parent, idx) =>
                        idx === 0 ? `${parent}, ` : `${parent}`,
                      )}
                      <IconTriangle
                        openAccordion={openAccordion}
                        additionalClassName="nearParentsText"
                      />
                    </td>
                  )}
                  <td className="TableData AccordionWrapper">
                    <AccordionItem />
                  </td>
                </tr>
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
          />
        </>
      )}
    </StudentsTableStyled>
  );
};

export default StudentsTable;