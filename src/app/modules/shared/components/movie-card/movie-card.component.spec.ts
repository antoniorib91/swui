import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { Router } from '@angular/router';
import { Mock } from 'src/app/mocks/mock';
import { Stub } from 'src/app/mocks/stub';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ],
      providers: [
        { provide: Router, useClass: Mock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
  });

  describe('When init the component =>', () => {
    describe('And the movie variable as populated =>', () => {
      beforeEach(() => {
        component.movie = Stub.movie();
        component.id = 1;
        fixture.detectChanges();
      });
      it('Should create....', () => {
        expect(component).toBeTruthy();
      });
      it('Should populate imagePath variable...', () => {
        const expected = './assets/images/episode1-cover.jpeg';
        expect(component.imagePath).not.toBeNull();
        expect(component.imagePath).toEqual(expected);
      });
      describe('When call the functions =>', () => {
        describe('#clickedShow', () => {
          beforeEach(() => {
            spyOn(router, 'navigateByUrl');
            component.clickedShow();
          });
          it('Should call the router.navigateByUrl', () => {
            const expected = `movies/${component.id}`;
            expect(router.navigateByUrl).toHaveBeenCalled();
            expect(router.navigateByUrl).toHaveBeenCalledWith(expected);
          });
        });
        describe('#handleMouseOver', () => {
          beforeEach(() => {
            spyOn(component.hover, 'emit');
            component.handleMouseOver();
          });
          it('Should call the hover.emit', () => {
            const expected = component.movie.episode_id;
            expect(component.hover.emit).toHaveBeenCalled();
            expect(component.hover.emit).toHaveBeenCalledWith(expected);
          });
        });
        describe('#handleMouseOut', () => {
          beforeEach(() => {
            spyOn(component.hover, 'emit');
            component.handleMouseOut();
          });
          it('Should call the hover.emit', () => {
            expect(component.hover.emit).toHaveBeenCalled();
            expect(component.hover.emit).toHaveBeenCalledWith(0);
          });
        });
      });
    });
    describe('And the movie variable not has populaded =>', () => {
      it('should throw an error....', () => {
        const expected = 'Inside app-card-component, variable movie should be populated';
        expect(() => fixture.detectChanges()).toThrowError(expected);
      });
    });
  });
});
