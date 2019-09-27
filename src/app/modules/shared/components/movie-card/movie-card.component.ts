import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Input() id: number;

  @Output() hover: EventEmitter<number> = new EventEmitter();

  public imagePath: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.initContent();
  }

  public clickedShow() {
    this.router.navigateByUrl(`movies/${this.id}` );
  }

  public handleMouseOver() {
    this.hover.emit(this.movie.episode_id);
  }

  public handleMouseOut() {
    this.hover.emit(0);
  }

  private initContent() {
    if (!this.movie) {
      throw new Error('Inside app-card-component, variable movie should be populated');
    } else {
      this.imagePath = `./assets/images/episode${this.movie.episode_id}-cover.jpeg`;
    }
  }

}
