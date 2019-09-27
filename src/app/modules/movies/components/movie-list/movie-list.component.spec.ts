import { MoviesService } from './../../services/movies.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { Mock } from 'src/app/mocks/mock';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data-service';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { of } from 'rxjs';
import { Stub } from 'src/app/mocks/stub';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let service: MoviesService;
  let spinner: NgxSpinnerService;
  let dataService: DataService;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ],
      providers: [
        { provide: MoviesService, useClass: Mock},
        { provide: NgxSpinnerService, useClass: Mock},
        { provide: DataService, useClass: Mock},
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    service = TestBed.get(MoviesService);
    spinner = TestBed.get(NgxSpinnerService);
    dataService = TestBed.get(DataService);
    spyOn(service, 'getAllFilms').and.returnValue(of(Stub.movies()));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create...', () => {
    expect(component).toBeTruthy();
  });

  describe('When create the component =>', () => {
    it('Should call service.getAllFilms method...', () => {
      expect(service.getAllFilms).toHaveBeenCalled();
    });
    it('Should call spinner service hide method', () => {
      spyOn(spinner, 'hide');
      component.ngOnInit();
      expect(spinner.hide).toHaveBeenCalled();
    });
    it('Should populate movies and dataService.movies...', () => {
      expect(component.movieList).not.toBeNull();
      expect(component.movieList).not.toBeUndefined();
      expect(dataService.movies).not.toBeNull();
      expect(dataService.movies).not.toBeUndefined();
    });
  });

  describe('When call the methods =>', () => {
    describe('#handleMouseOver', () => {
      describe('When the param value is more then 0 =>', () => {
        beforeEach(() => {
          component.handleMouseOver(1);
        });
        it('Should add styles to child div...', () => {
          const div = fixture.nativeElement.querySelector('.movie-list');
          const bgImage = div.style.backgroundImage;
          const bgRepeat = div.style.backgroundRepeat;
          const bgSize = div.style.backgroundSize;
          const expectedImgUrl = 'url("./assets/images/episode1-top.jpeg")';
          expect(bgImage).toBe(expectedImgUrl);
          expect(bgRepeat).toBe('no-repeat');
          expect(bgSize).toBe('cover');
        });
      });
      describe('When the param is 0', () => {
        beforeEach(() => {
          component.handleMouseOver(0);
        });
        it('Should clear all styles from child div', () => {
          const div = fixture.nativeElement.querySelector('.movie-list') as HTMLDivElement;
          const bgImage = div.style.backgroundImage;
          const bgRepeat = div.style.backgroundRepeat;
          const bgSize = div.style.backgroundSize;
          expect(bgImage).toBe('');
          expect(bgRepeat).toBe('');
          expect(bgSize).toBe('');
        });
      });
    });
  });
});
