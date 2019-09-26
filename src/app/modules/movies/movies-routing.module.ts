import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';


const routes: Routes = [
  {
    path: 'all',
    component: MovieListComponent
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
