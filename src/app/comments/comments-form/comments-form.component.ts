import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {comments } from '../../models/comments';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';


@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrl: './comments-form.component.css'
})
export class CommentsFormComponent  implements  OnInit {



  postId!:string;
  constructor(private route:ActivatedRoute,private commentServices:CommentService){}


  ngOnInit(): void {
      
    
    this.route.params.subscribe(val =>{
      console.log(val['id']);
      this.postId=val['id'];
    
    }
    
    )
    }


  formData:any
  submit(commentform:any) {
    this.formData=commentform
    console.log(commentform.form.value.Name)

    const commentData : comments={
      userName:this.formData.form.value.Name,
      comment:this.formData.form.value.comment,
      postId:this.postId,
      commentedAt:new Date()
    }

    this.commentServices.addComment(commentData) 

    this.formData.reset()


 }

   
  


}
