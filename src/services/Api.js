import axios from 'axios';

export const fetchStudentsData = async () => {
  try {
    const response = await axios.get(`https://test-task-j.herokuapp.com/data?page=1&size=10`);
    console.log('response.data.data', response.data.data);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
