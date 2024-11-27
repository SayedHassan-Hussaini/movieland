import axios from 'axios';
import invariant from 'tiny-invariant';
const BASE_URL = process.env.SERVER_API_URL;

invariant(
  process.env.SERVER_API_URL,
  'SERVER_API_URL is not defined, please define it in your .env file',
);

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});



