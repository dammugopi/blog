import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private afs: AngularFirestore) {}

  loadFeatured() {
    return this.afs
      .collection('posts', (ref) =>
        ref.where('isFeatured', '==', true).limit(4)
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  loadLatest() {
    return this.afs
      .collection('posts', (ref) => ref.orderBy('createdAt'))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  loadCategoryPosts(categoryId: any) {
    return this.afs
      .collection('posts', (ref) =>
        ref.where(`category.categoryId`, '==', categoryId).limit(4)
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  loadOnePost(postid: any) {
    // to load the main post
    return this.afs.doc(`posts/${postid}`).valueChanges();
  }

  loadSimillar(catId: any) {
    // to load silimilar post in singlepost
    return this.afs
      .collection('posts', (ref) =>
        ref.where('category.categoryId', '==', catId).limit(4)
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  countViews(postId: any) {
    const viewsCount = {
      views: firebase.default.firestore.FieldValue.increment(1), // we did * from firebase
    };
    this.afs
      .doc(`posts/${postId}`)
      .update(viewsCount)
      .then(() => {
        // console.log('view count updated');
      });
  }

  loadComments(postId:any){
    return this.afs
    .collection('comments', (ref) =>
      ref.where('postId', '==', postId).limit(4)
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


}
