import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://payapiforme.herokuapp.com/'
});

export default instance;