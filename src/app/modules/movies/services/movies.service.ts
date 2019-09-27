import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ApiPaginatedResponse } from '../../../models/api-paginated-response.model';
import { Movie } from '../../../models/movie.model';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class MoviesService {

  private baseUrl = environment.baseApiUrl;

  constructor(
    private http: HttpClient
  ) {}

  public getAllFilms(): Observable<Array<Movie>> {
    const url = `${this.baseUrl}films/`;
    return this.http.get<ApiPaginatedResponse<Movie>>(url).pipe(
      switchMap(res => of(res.results))
    );
  }

  public getFilmById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}films/${id}/`;
    return this.http.get<Movie>(url);
  }
}
