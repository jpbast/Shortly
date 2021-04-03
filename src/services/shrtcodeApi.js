import axios from 'axios';

const shrtcoApi = axios.create({
  baseURL: 'https://api.shrtco.de/v2',
});

export default shrtcoApi;
