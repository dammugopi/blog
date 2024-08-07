import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent {


  isEmailError:boolean=false
  isSubscribed:boolean=false

  constructor(private subService:SubscribersService){}

onSubmit( formVal:any) {
  // console.log(formVal)
  
 const subData : Sub ={
    name:formVal.form.controls.Name.value,
    email:formVal.form.controls.Email.value
 }

 

//  console.log(subData);
//  this.subServe.addSubs(subData)

this.subService.checkSubs(subData.email).subscribe(val =>{
  console.log(val);

  if(val.empty){
    this.subService.addSubs(subData);
    this.isSubscribed = true
  }
  else{
    this.isEmailError=true
    console.log("email already exists")
  }
})

}

}
