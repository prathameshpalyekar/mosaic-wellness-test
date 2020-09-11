import axios from 'axios';
import BASE_URL from '../web/config';

export const SERVER = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'public',
    'Pragma': 'public'
  }
});

export const SERVER_SIDE_AXIOS = (request = {}) => {
  const { headers = {} } = request.req || {};
  const { host = '' } = headers;
  const hostName = host.includes('localhost') ? 'localhost:5600' : host;
  const BASE_URL = `http://${hostName}/api/`;
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export const AUTHORISE_WITH_TOKEN = (token) => {
  SERVER.interceptors.request.use((config) => {
    config.headers.Authorization = token;
    return config;
  });
}