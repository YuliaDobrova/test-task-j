import axios from 'axios';

export const fetchStudentsData = async () => {
  try {
    const response = await axios.get(`https://test-task-j.herokuapp.com/data`);
    console.log('response', response);
    // return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
