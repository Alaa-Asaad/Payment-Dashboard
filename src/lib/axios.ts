/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const ApiClient = axios.create({
  baseURL: '/api',
  headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
});

export default ApiClient;
