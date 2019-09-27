import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ButtonRollComponent } from './components/buttons/button-roll/button-roll.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    ButtonRollComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    MovieCardComponent,
    ButtonRollComponent
  ]
})
export class SharedModule { }
