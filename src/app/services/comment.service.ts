import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService  {

  constructor(private afs: AngularFirestore) {

    
   }

  addComment(commentData:object){
    this.afs.collection('comments').add(commentData).then(()=>{
      console.log("successfully added");

    })


  }


  loadComments(postId:any){
    return this.afs
    .collection('comments', (ref) =>

      ref.orderBy('commentedAt','desc').where('postId','==',postId)
    )
    .snapshotChanges() 
    .pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log(id);
          console.log(data);

          return {id, data};
        });
      })
    );
  }
  // loadComments(postId:any){
  //   return this.afs
  //   .collection('comments', (ref) =>

  //     ref.orderBy("commentedAt",'desc').where('postId', '==', postId)
  //   )
  //   .snapshotChanges() 
  //   .pipe(
  //     map((actions) => {
  //       return actions.map((a) => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;
  //         console.log(id);
  //         console.log(data);

  //         return {id, data};
  //       });
  //     })
  //   );
  // }



}
