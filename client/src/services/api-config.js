import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://genuineengineering-api.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl,
  headers: {"Access-Control-Allow-Origin": "*"}
})

export default api;