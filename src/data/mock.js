const axios = require('axios')
const MockAdapter = require('axios-mock-adapter');

const Mock = new MockAdapter(axios);



// import axios, { AxiosRequestConfig } from 'axios';
// import MockAdapter from 'axios-mock-adapter';

// const axiosMockInstance = axios.create();

// const Mock = new MockAdapter(axiosMockInstance);

export default Mock;