import axios from 'axios';

export const fetchStudentsData = async () => {
  try {
    const response = await axios.get(`https://test-task-j.herokuapp.com/data?page=1&size=10`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
