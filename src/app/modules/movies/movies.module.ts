import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService } from './services/movies.service';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SafeUrlPipe } from './../../pipes/safe-url.pipe';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule,
    MoviesRoutingModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
