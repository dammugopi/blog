import { Component } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {

  postId!:string
  commentList!:any
  totalComments!:number
  
  

  constructor(private commentService:CommentService,private route:ActivatedRoute){

    this.route.params.subscribe(val =>{
      console.log(val['id']);
      this.postId=val['id'];
    
    })
    this.load()

    



  }

  load(){
    this.commentService.loadComments(this.postId).subscribe((val)=>{
      this.commentList=val
      this.totalComments=val.length

      console.log(this.commentList)
    })
    
  }

   

}
