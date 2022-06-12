import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../types/Hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero/hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: any

  @Output()
  testOutput1: EventEmitter<any> = new EventEmitter()

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    console.log("Awdawdaw")
    const id = this.route.snapshot.paramMap.get('id');
    console.log("test 1")
    this.heroService.getHero(id).subscribe(snapshot => {
      this.hero = {
        id: snapshot.payload.id,
        ...snapshot.payload.data()
      }
    })
  }

  clickOnItem() {
    // this.testOutput1.emit(1)
    this.hero.sex++
  }

}
