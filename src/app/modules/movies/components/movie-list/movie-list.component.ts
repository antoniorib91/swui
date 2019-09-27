import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { DataService } from '../../../../services/data-service';

import { NgxSpinnerService } from 'ngx-spinner';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy {

  @ViewChild('movieDivList', { read: ElementRef, static: true}) movieDiv: ElementRef<HTMLDivElement>;

  private movies: Array<Movie> = [];
  private subscription: Subscription;

  constructor(
    private service: MoviesService,
    private spinner: NgxSpinnerService,
    private dataService: DataService
  ) { }

  get movieList(): Array<Movie> {
    return this.movies;
  }

  ngOnInit(): void {
    this.spinner.show();
    this.subscription = this.service.getAllFilms().subscribe(
      res => this.initContentResponse(res),
      err => this.handleError(err)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription && this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  public handleMouseOver(currentMovie: number) {
    if (currentMovie !== 0) {
      const path = `./assets/images/episode${currentMovie}-top.jpeg`;
      this.movieDiv.nativeElement.style.backgroundImage = `url(${path})`;
      this.movieDiv.nativeElement.style.backgroundRepeat = 'no-repeat';
      this.movieDiv.nativeElement.style.backgroundSize = 'cover';
    } else {
      this.movieDiv.nativeElement.style.removeProperty('background-image');
    }
  }

  private initContentResponse(response: Array<Movie>): void {
    this.spinner.hide();
    this.movies = response;
    this.dataService.movies = response;
  }

  private handleError(err: any): void {
    this.spinner.hide();
    console.log('err', err);
  }
}
