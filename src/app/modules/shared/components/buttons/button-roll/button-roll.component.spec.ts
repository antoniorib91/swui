import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRollComponent } from './button-roll.component';
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ButtonRoll } from 'src/app/enums/button-roll.enum';

describe('ButtonRollComponent', () => {
  let component: ButtonRollComponent;
  let fixture: ComponentFixture<ButtonRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRollComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: faAngleLeft, useValue: faAngleLeft },
        { provide: faAngleRight, useValue: faAngleRight }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRollComponent);
    component = fixture.componentInstance;
  });

  describe('When init the component =>', () => {
    describe('And populate variable buttonSide =>', () => {
      describe('And the variable was "left" =>', () => {
        beforeEach(() => {
          component.buttonSide = ButtonRoll.LEFT;
          fixture.detectChanges();
        });
        it('Should create the component...', () => {
          expect(component).toBeTruthy();
        });
        describe('When call the methods =>', () => {
          describe('#addClassToButton', () => {
            it('Should return an object with left: true...', () => {
              expect(component.addClassToButton()).toEqual({left: true, right: false});
            });
          });
          describe('#addIconToButton', () => {
            it('Should return the arrowLeft object', () => {
              expect(component.addIconToButton()).toEqual(faAngleLeft);
            });
          });
        });
      });
      describe('And the variable was "right" =>', () => {
        beforeEach(() => {
          component.buttonSide = ButtonRoll.RIGHT;
          fixture.detectChanges();
        });
        it('Should create the component...', () => {
          expect(component).toBeTruthy();
        });
        describe('When call the methods =>', () => {
          describe('#addClassToButton', () => {
            it('Should return an object with right: true...', () => {
              expect(component.addClassToButton()).toEqual({left: false, right: true});
            });
          });
          describe('#addIconToButton', () => {
            it('Should return the arrowRight object', () => {
              expect(component.addIconToButton()).toEqual(faAngleRight);
            });
          });
        });
      });
    });
    describe('And not populate variable buttonSide =>', () => {
      it('Should throw an Error...', () => {
        const expected = 'Inside app-button-roll-component, inform property buttonSide';
        expect(() => fixture.detectChanges()).toThrowError(expected);
      });
    });
  });
});
