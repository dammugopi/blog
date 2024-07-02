import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {

  @Input() postData!: any;


   ngOnInit(): void {
       
     console.log(this.postData);
     console.log(this.postData.id)
    //  console.log(this.postData.data.postImgPath);


    }
  

}
