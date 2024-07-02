import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path: 'category/:categoryname/:id',component:SingleCategoryComponent},
  //  the names you used must be in the same order and same name when accessing will be sent to single category component 
  {path:'post/:id',component:SinglePostComponent},


  { path:'about',component:AboutUsComponent},
  { path:'terms-conditions',component:TermsAndConditionsComponent},
  { path: 'contact',component:ContactUsComponent},

  { path :'**', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
