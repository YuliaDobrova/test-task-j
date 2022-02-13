import axios from 'axios';

export const fetchStudentsData = async ({
  limit = 5,
  page = 1,
  sortBy = '',
  sortDir = '-1',
  search,
}) => {
  try {
    // const { data } = await axios.get(
    //   `https://test-task-j.herokuapp.com/data?page=${page}&size=${limit}`,
    // );
    const { data } = await axios.get(`https://test-task-j.herokuapp.com/data`, {
      params: {
        size: limit,
        page,
        sortBy,
        sortDir,
        search,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchStudentsByQuery = async query => {
  try {
    const response = await axios.get(
      `https://test-task-j.herokuapp.com/data?page=1&size=10&search=${query}`,
    );
    // console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
