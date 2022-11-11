import axios from 'axios';

export default axios.create({
  baseURL: 'https://opuindy-invoice-api.herokuapp.com',
});
