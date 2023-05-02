import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignupComponent } from './Signup/signup/signup.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Elysium';

  constructor(public dialog: MatDialog, private router:Router){}


  togallery()
  {
    document.getElementById("gallery")?.scrollIntoView({behavior:"smooth"});
  }

  toservice()
  {
    document.getElementById("srv")?.scrollIntoView({behavior:"smooth"});
  }

  tohome()
  {
    document.getElementById("hom")?.scrollIntoView({behavior:"smooth"});
  }

  tofooter()
  {
    document.getElementById("foot")?.scrollIntoView({behavior:"smooth"});
  }

  openDialogSignIn(enterAnimationDuration: string, exitAnimationDuration: string):void
  {
    this.dialog.open(SignupComponent, 
    {
      enterAnimationDuration,
      exitAnimationDuration
    });
  }
  
  openDialogIn(enterAnimationDuration: string, exitAnimationDuration: string):void
  {
    this.dialog.open(LoginComponent, 
    {
      enterAnimationDuration,
      exitAnimationDuration
    });
  }
}
