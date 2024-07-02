import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
 
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent  implements OnInit{

  constructor(private route:ActivatedRoute,private postServive:PostsService ){}

  wholepost:any
  simillarPost:any
  comments:any
  postIdForComment!:string
  
  ngOnInit():void {
    this.route.params.subscribe(val =>{
      console.log(val['id']);
      this.postIdForComment=val['id']


      this.postServive.countViews(val['id'])
      this.postServive.loadOnePost(val['id']).subscribe(post =>{
        console.log(post);
        this.wholepost=post
        this.loadSimillar(this.wholepost.category.categoryId);
        // this.loadComments(this.wholepost.id)

      })
      
    })


  }


    loadSimillar(catId:any){
    this.postServive.loadSimillar(catId).subscribe(val =>{
      // console.log(val);
      this.simillarPost=val
    })
  }
  // loadComments(postId:any){
  //   this.commentService.loadComments(postId).subscribe(val =>{
  //     // console.log(val)
  //   })
  // }

}
