import React, { useState, useEffect } from 'react';
import { fetchStudentsData } from '../../services/Api';
import useFetching from '../../hooks/useFetching';
import Loader from '../loader/Loader';
import Filter from '../search/Search';
import ExportButton from '../exportBtn/ExportButton';
import StudentsTable from '../table/studentsTable/StudentsTable';
import { StudentsInfoStyled } from './StudentsInfoStyled';

const StudentsInfo = () => {
  const [result, setResult] = useState({
    students: [],
    totalPages: 0,
  });
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({
    sortBy: '',
    sortDir: 1,
  });

  const changeSort = sortBy => {
    if (sort.sortBy !== sortBy) {
      setSort({ sortBy, sortDir: 1 });
    } else {
      const newSortDir = sort.sortDir === 1 ? -1 : 1;
      setSort({ sortBy, sortDir: newSortDir });
    }
  };

  const [fetchStudents, isStudentsDataLoading, errorStudentsData] = useFetching(
    async (limit, page) => {
      const { sortBy, sortDir } = sort;
      const { data, totalPages } = await fetchStudentsData({
        limit,
        page,
        sortBy,
        sortDir,
        search,
      });
      setResult({
        students: data,
        totalPages,
      });
    },
  );
  // console.log('render');
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
  }, [page, limit, sort, search]);

  const onChangePage = value => {
    const newValue = page + value;
    // console.log('newValue', newValue);
    if (newValue === 0 || newValue > result.totalPages) {
      return;
    }
    setPage(newValue);
  };

  return (
    <StudentsInfoStyled>
      <div className="StudentsInfoWrapper">
        <h1 className="StudentsInfoTitle">Students</h1>
        <Filter search={search} setSearch={setSearch} />
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
          students={result.students}
          page={page}
          totalPages={result.totalPages}
          onChangePage={onChangePage}
          limit={limit}
          setLimit={setLimit}
          changeSort={changeSort}
        />
      )}
    </StudentsInfoStyled>
  );
};

export default StudentsInfo;
