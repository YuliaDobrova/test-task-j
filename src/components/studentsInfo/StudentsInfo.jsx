import React, { useState, useEffect } from 'react';
// fetchStudentsByQuery
import { fetchStudentsData } from '../../services/Api';
import useFetching from '../../hooks/useFetching';
import Loader from '../loader/Loader';
import Filter from '../filter/Filter';
import ExportButton from '../exportBtn/ExportButton';
import StudentsTable from '../table/studentsTable/StudentsTable';
import { StudentsInfoStyled } from './StudentsInfoStyled';

const StudentsInfo = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
  };

  const [fetchStudents, isStudentsDataLoading, errorStudentsData] = useFetching(
    async (limit, page) => {
      const response = await fetchStudentsData(limit, page);
      setStudents(response);
      const totalCount = response;
      setTotalPages(getPageCount(totalCount, limit));
    },
  );

  // const [fetchStudentsByQuery, isStudentsByQueryLoading, errorStudentsByQuery] = useFetching(
  //   async query => {
  //     const response = await fetchStudentsByQuery(query);
  //     console.log('fetchStudentsByQuery response', response);
  //     setStudents(response);
  //   },
  // );

  useEffect(() => {
    fetchStudents(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const onChangePage = page => {
    setPage(page);
    fetchStudents(limit, page);
  };

  return (
    <StudentsInfoStyled>
      <div className="StudentsInfoWrapper">
        <h1 className="StudentsInfoTitle">Students</h1>
        <Filter filter={filter} setFilter={setFilter} />
        <ExportButton />
      </div>

      {errorStudentsData && (
        <h1 style={{ textAlign: 'center', color: 'red' }}>Error:{errorStudentsData}</h1>
      )}
      {isStudentsDataLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
          <Loader />
        </div>
      ) : (
        <StudentsTable
          students={students}
          page={page}
          totalPages={totalPages}
          onChangePage={onChangePage}
          limit={limit}
          setLimit={setLimit}
        />
      )}
    </StudentsInfoStyled>
  );
};

export default StudentsInfo;
