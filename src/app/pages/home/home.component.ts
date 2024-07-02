import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  featuredPostArray:any;
  latestPostArray:any;

  constructor(private postService:PostsService){

    // to load the featured data
    this.postService.loadFeatured().subscribe(val =>{
      // console.log(val)
      this.featuredPostArray=val;

    })

    //to load the latest we use  date in the post data

    this.postService.loadLatest().subscribe(val =>{
      this.latestPostArray=val;
    })



  }

}
