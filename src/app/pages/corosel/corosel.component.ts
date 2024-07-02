import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-corosel',
  templateUrl: './corosel.component.html',
  styleUrl: './corosel.component.css',
})
export class CoroselComponent {
  @Input() postData: any;

  ngOnInit(): void {
       
    console.log(this.postData);
    console.log(this.postData.id)
   //  console.log(this.postData.data.postImgPath);


   }
}
