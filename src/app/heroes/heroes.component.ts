import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { HeroService } from '../hero/hero.service';
import { HeroTestService } from '../hero-test.service';
import { Title } from '@angular/platform-browser';

interface Hero {
  title: string,
  sex: number, // 0 male, 1 female
  isDie?: boolean
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero

  display: boolean = true

  heroes: any[]

  // heroes: Hero[] = [
  //   {
  //     title: "hero1",
  //     sex: 0,
  //     isDie: true
  //   },
  //   {
  //     title: "hero2",
  //     sex: 0,
  //     isDie: true
  //   },
  //   {
  //     title: "hero3",
  //     sex: 0,
  //     isDie: false
  //   },
  //   {
  //     title: "hero4",
  //     sex: 1,
  //     isDie: true
  //   },
  //   {
  //     title: "hero5",
  //     sex: 1,
  //     isDie: true
  //   },
  //   {
  //     title: "hero6",
  //     sex: 0,
  //     isDie: false
  //   },

  // ]

  constructor(
    private heroService: HeroService,
    private heroServiceTest: HeroTestService
  ) { }

  ngOnInit() {


    this.heroService.listHeroes(ref => ref.where('isDie', '==', false)).subscribe(heroes => {
      this.heroes = heroes.map(doc => {
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data()
        }
      })
    });

    this.heroService.getHero("1tKfQx2gal2ir8RQ758a").subscribe(hero => {
      console.log('hero :', hero);
    })
  }

  onClick($event) {

  }

  onSelectedHero(hero) {
    this.selectedHero = hero
  }

  testOutput($event) {
    console.log("test", $event)
  }

  addHero() {
    this.heroService.addHero({
      title: "test",
      sex: "Male",
      isDie: false
    }).then(data => {
      console.log('data :', data);
    }).catch(err => {
      console.log('err :', err);
    })
  }

  deleteHero(hero) {
    this.heroService.deleteHero(hero.id).then(data => {
      console.log('data :', data);
    }).catch(err => {
      console.log('err :', err);
    })
  }

  editHero(hero) {
    this.heroService.editHero(hero.id, { title: "adf" }).then(data => {
      console.log('data :', data)
    }).catch(err => {
      console.log('err :', err);
    })
  }

  listHero() {
    this.heroServiceTest.listHero(ref => ref
      .where("isDie", "==", true)).subscribe(value => {
      let array = value.map(function (snapshot) {
        return {
          id: snapshot.payload.doc.id,
          ...snapshot.payload.doc.data()
        }
      })
      this.heroes = array
    })
  }

}


// [
//   {id,title,sex,isDie}
// ]


