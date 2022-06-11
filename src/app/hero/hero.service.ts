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
    return this.db.collection('heroe', filter).snapshotChanges()
  }

  getHero(id: string) {
    // let doc = this.db.doc(path)
    return this.db.doc(`heroe/${id}`).snapshotChanges()
  }

  addHero(hero) {
    return this.db.collection('heroe').add(hero)
  }

  deleteHero(id) {
    return this.db.doc(`heroe/${id}`).delete()
  }

  editHero(id, hero) {
    return this.db.doc(`heroe/${id}`).update(hero)
  }

}
