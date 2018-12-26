import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HeroRoutingModule } from './hero-routing/hero-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    HeroRoutingModule,
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent
  ]
})
export class HeroModule { }
