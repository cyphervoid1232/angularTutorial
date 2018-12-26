import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'hero', component: HeroesComponent },
  { path: 'hero/detail/:id', component: HeroDetailComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
