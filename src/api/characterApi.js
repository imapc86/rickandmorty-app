import axios from 'axios';

export const characterApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API
});