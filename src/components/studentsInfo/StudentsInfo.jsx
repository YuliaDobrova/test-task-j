import React, { useState, useEffect } from 'react';

import { fetchStudentsData } from '../../services/Api';
import useFetching from '../../hooks/useFetching';
import Loader from '../loader/Loader';
// import Table from '../table/Table';
import Filter from '../filter/Filter';
import ExportButton from '../exportBtn/ExportButton';
import { StudentsInfoStyled } from './StudentsInfoStyled';

const StudentsInfo = () => {
  const [students, setStudents] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(5);

  const [fetchStudents, isLoading, error] = useFetching(async (limit, page) => {
    const response = await fetchStudentsData(limit, page);
    setStudents(response);
  });

  useEffect(() => {
    fetchStudents(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  return (
    <StudentsInfoStyled>
      <div className="StudentsInfoWrapper">
        <h1 className="StudentsInfoTitle">Students</h1>
        <Filter />
        <ExportButton />
      </div>
      {/* <Table list={data} colNames={colNames} /> */}

      {error && <h1>Error:${error}</h1>}
      {isLoading ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <Loader />
          </div>
        </>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.name}</li>
          ))}
        </ul>
      )}
    </StudentsInfoStyled>
  );
};

export default StudentsInfo;
