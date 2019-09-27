import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { SafeUrlPipe } from 'src/app/pipes/safe-url.pipe';
import { Mock } from 'src/app/mocks/mock';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data-service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

xdescribe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let pipe: SafeUrlPipe;
  let dataService: DataService;
  let spinner: NgxSpinnerService;
  let activateRoute: ActivatedRoute;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieDetailComponent,
        SafeUrlPipe
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { params: { id: 1 }}},
        { provide: NgxSpinnerService, useClass: Mock },
        { provide: DataService, useClass: Mock }
      ],
      // schemas: [
      //   NO_ERRORS_SCHEMA
      // ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    dataService = TestBed.get(DataService);
    spinner = TestBed.get(NgxSpinnerService);
    activateRoute = TestBed.get(ActivatedRoute);
    activateRoute.snapshot.params.id = 1;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
