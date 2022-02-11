import React, { useState, useEffect } from 'react';

import { fetchStudentsData } from '../../services/Api';
import Loader from '../loader/Loader';
import Filter from '../filter/Filter';
import ExportButton from '../exportBtn/ExportButton';
import { StudentsInfoStyled } from './StudentsInfoStyled';
// import Table from '../table/Table';

const StudentsInfo = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetchStudentsData().then(results => setStudents(results));
    setisLoading(false);
  }, []);

  // const colNames = ['Name', 'ID', 'Class', 'Av.Score,%', 'Av.Speed', 'Parents'];

  // const { totalPages, data } = studentsData;
  // console.log('data', data);
  return (
    <StudentsInfoStyled>
      {isLoading && <Loader />}
      <div className="StudentsInfoWrapper">
        <h1 className="StudentsInfoTitle">Students</h1>
        <Filter />
        <ExportButton />
      </div>
      {/* <Table list={data} colNames={colNames} /> */}

      {students && (
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
