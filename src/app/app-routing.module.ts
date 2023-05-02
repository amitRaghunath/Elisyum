import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Signup/signup/signup.component';
import { LandingComponent } from './Landing/landing/landing.component';

const routes: Routes = 
[
  {path:"signup",component:SignupComponent},
  {path:"welcome",component:LandingComponent},
  {path:"",redirectTo:"welcome", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
