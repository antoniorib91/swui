import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private savedMovies: Array<Movie>;

  set movies(value: Array<Movie>) {
    this.savedMovies = value;
  }
  get movies() {
    return this.savedMovies;
  }

}
