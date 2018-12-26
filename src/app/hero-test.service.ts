import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeroTestService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  listHero(filter?: QueryFn) {
    return this.db.collection("heroe", filter).snapshotChanges()
  }
}
