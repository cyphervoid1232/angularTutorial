import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private db: AngularFirestore
  ) { }

  listHeroes(filter?: QueryFn) {
    console.log("gggg")
    return this.db.collection('heroe', filter).snapshotChanges()
  }

  getHero(id: string) {
    // let doc = this.db.doc(path)
    console.log("gggg")
    return this.db.doc(`heroe/${id}`).snapshotChanges()
  }

  addHero(hero) {
    console.log("gggg")
    return this.db.collection('heroe').add(hero)
  }

  deleteHero(id) {
    console.log("gggg")
    return this.db.doc(`heroe/${id}`).delete()
  }

  editHero(id, hero) {
    console.log("gggg")
    return this.db.doc(`heroe/${id}`).update(hero)
  }

}
