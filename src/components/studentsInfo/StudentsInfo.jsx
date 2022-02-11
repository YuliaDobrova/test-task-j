import React, { useState, useEffect } from 'react';

import { fetchStudentsData } from '../../services/Api';
import Loader from '../loader/Loader';
import Filter from '../filter/Filter';
import ExportButton from '../exportBtn/ExportButton';
import { StudentsInfoStyled } from './StudentsInfoStyled';

const StudentsInfo = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetchStudentsData().then(results => setStudents(results));
    setisLoading(false);
  }, []);

  return (
    <StudentsInfoStyled>
      {isLoading && <Loader />}
      <div className="StudentsInfoWrapper">
        <h1 className="StudentsInfoTitle">Students</h1>
        <Filter />
        <ExportButton />
      </div>
      <div>Students data:{students}</div>
      {/* {students && <div>{students}</div>} */}
    </StudentsInfoStyled>
  );
};

export default StudentsInfo;
