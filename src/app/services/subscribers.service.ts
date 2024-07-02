import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs : AngularFirestore) { }
  addSubs(subData:object){
    this.afs.collection('subscribers').add(subData).then(()=>{
      console.log("successfully added");

    })


  }


  checkSubs(subEmail:any){
    return this.afs.collection('subscribers',ref => ref.where('email','==',subEmail)).get()

  }
}
