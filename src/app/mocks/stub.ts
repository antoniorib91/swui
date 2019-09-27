import { ApiPaginatedResponse } from './../models/api-paginated-response.model';
import { Movie } from './../models/movie.model';
export class Stub {

  public static movie() {
    return {
      title: 'teste',
      episode_id: 1,
      characters: [''],
      created: 'teste',
      director: 'teste',
      edited: 'teste',
      opening_crawl: 'teste',
      planets: ['teste'],
      producer: 'teste',
      release_date: 'teste',
      species: ['teste'],
      starships: ['teste'],
      url: 'teste',
      vehicles: ['teste']
    } as Movie;
  }

  public static movies() {
    return [
      {
        title: 'teste',
        episode_id: 1
      } as Movie,
      {
        title: 'teste 2',
        episode_id: 2
      } as Movie
    ];
  }

  public static apiPaginatedResponse() {
    return {
      count: 2,
      next: null,
      previous: null,
      results: this.movies()
    } as ApiPaginatedResponse<Array<Movie>>;
  }
}
