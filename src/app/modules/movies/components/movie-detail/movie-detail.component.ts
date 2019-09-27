import { DataService } from './../../../../services/data-service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { EpisodesTrailers } from '../../../../enums/episodes-trailers.enum';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie: Movie;
  public imagePath: string;
  public youtubeUrl: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.initContent();
  }

  initContent() {
    this.spinner.show();
    const id = this.activatedRoute.snapshot.params.id;
    const response = this.dataService.movies.find((value, index) => index.toString() === id);
    this.initContentResponse(response);
  }

  private initContentResponse(response: Movie): void {
    this.spinner.hide();
    this.movie = response;
    this.imagePath = `./assets/images/episode${this.movie.episode_id}-cover.jpeg`;
    this.youtubeUrl = EpisodesTrailers[`EPISODE${this.movie.episode_id}`];
  }

  private handleError(err: any): void {
    this.spinner.hide();
    console.log('err', err);
  }

}
