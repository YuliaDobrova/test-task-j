import React, { useState, useEffect } from 'react';
import { fetchStudentsData } from '../../services/Api';
import useFetching from '../../hooks/useFetching';
import Loader from '../loader/Loader';
import Filter from '../search/Search';
import ExportButton from '../exportBtn/ExportButton';
import StudentsTable from '../table/studentsTable/StudentsTable';
import { StudentsInfoStyled } from './StudentsInfoStyled';
import SubHeaderCollapse from '../subHeaderCollapse/SubHeaderCollapse';
import Container from '../container/Container';

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

  useEffect(() => {
    fetchStudents(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, sort, search]);

  const onChangePage = value => {
    const newValue = page + value;
    if (newValue === 0 || newValue > result.totalPages) {
      return;
    }
    setPage(newValue);
  };

  const toggleSelectStudent = (index, selected) => {
    const newStudents = result.students.map((item, idx) => {
      if (idx === index) {
        return { ...item, selected };
      }
      return item;
    });
    setResult({ ...result, students: newStudents });
  };

  const selectStudents = result.students.filter(student => student.selected);

  const cancelSelected = () => {
    const newStudents = result.students.map(item => {
      return { ...item, selected: false };
    });
    setResult({ ...result, students: newStudents });
  };

  return (
    <StudentsInfoStyled>
      {selectStudents.length > 0 ? (
        <SubHeaderCollapse selectStudents={selectStudents} cancelSelected={cancelSelected} />
      ) : (
        <Container>
          <div className="StudentsInfoWrapper">
            <h1 className="StudentsInfoTitle">Students</h1>
            <Filter search={search} setSearch={setSearch} />
            <ExportButton />
          </div>
        </Container>
      )}

      {errorStudentsData && (
        <h1 style={{ textAlign: 'center', color: 'red' }}>Error:{errorStudentsData}</h1>
      )}
      {isStudentsDataLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
          <Loader />
        </div>
      ) : (
        <Container>
          <StudentsTable
            students={result.students}
            page={page}
            totalPages={result.totalPages}
            onChangePage={onChangePage}
            limit={limit}
            setLimit={setLimit}
            changeSort={changeSort}
            toggleSelectStudent={toggleSelectStudent}
          />
        </Container>
      )}
    </StudentsInfoStyled>
  );
};

export default StudentsInfo;
