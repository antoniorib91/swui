import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { of, Subscription } from 'rxjs';
import { Stub } from 'src/app/mocks/stub';
import { Mock } from 'src/app/mocks/mock';

describe('MoviesService', () => {
  let subject: MoviesService;
  let httpClient: HttpClient;
  let subscription: Subscription;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MoviesService,
      { provide: HttpClient, useClass: Mock }
    ]
  }));
  beforeEach(() => {
    subject = TestBed.get(MoviesService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created...', () => {
    expect(subject).toBeTruthy();
  });

  describe('When call the methods =>', () => {
    afterEach(() => {
      if (subscription && !subscription.closed) {
        subscription.unsubscribe();
      }
    });
    describe('#getAllFilms', () => {
      beforeEach(() => {
        spyOn(httpClient, 'get').and.returnValue(of(Stub.apiPaginatedResponse()));
      });
      it('Should return a formated results..', () => {
        subscription = subject.getAllFilms().subscribe(
          res => expect(res).toEqual(Stub.movies())
        );
      });
      it('Should call http method Get...', () => {
        const expectedUrl = 'https://swapi.co/api/films/';
        subject.getAllFilms();
        expect(httpClient.get).toHaveBeenCalled();
        expect(httpClient.get).toHaveBeenCalledWith(expectedUrl);
      });

    });
    describe('#getFilmById', () => {
      beforeEach(() => {
        spyOn(httpClient, 'get').and.returnValue(of(Stub.movie()));
      });
      it('Should return movie data..', () => {
        subscription = subject.getFilmById(1).subscribe(
          res => expect(res).toEqual(Stub.movie())
        );
      });
      it('Should call http method Get...', () => {
        const expectedUrl = 'https://swapi.co/api/films/1/';
        subject.getFilmById(1);
        expect(httpClient.get).toHaveBeenCalled();
        expect(httpClient.get).toHaveBeenCalledWith(expectedUrl);
      });
    });
  });
});
