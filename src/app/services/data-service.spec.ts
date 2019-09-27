import { TestBed } from '@angular/core/testing';
import { DataService } from './data-service';
import { Stub } from '../mocks/stub';

describe('DataService', () => {
  let subject: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });
  beforeEach(() => {
    subject = TestBed.get(DataService);
  });

  it('Should be created...', () => {
    expect(subject).toBeTruthy();
  });

  it('Should can set movies', () => {
    subject.movies = Stub.movies();
    expect(subject.movies).toEqual(Stub.movies());
  });
});
