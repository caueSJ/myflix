const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/'
  : 'https://react-myflix.herokuapp.com/';

export default {
  URL_BACKEND,
};
