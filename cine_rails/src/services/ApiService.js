import axios from 'axios';
import { environment } from '../environments.js';

export class ApiService {
  uri = environment.URI_API;

  getDirectorById(id) {
    return axios.get(`${this.uri}/directors/${id}`);
  }

  getMovies() {
    return axios.get(`${this.uri}/movies`);
  }

  postMovie(movie) {
    return axios.post(`${this.uri}/movies`, movie);
  }
}