import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Project/login/login.component";
import { SigninComponent } from './Project/signin/signin.component';
import { LogoutComponent } from './Project/logout/logout.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./Project/header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Project/register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SigninComponent, LogoutComponent, CommonModule, HeaderComponent,RouterModule,HttpClientModule,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
title='dashboard';
loginlogoutbtn:boolean=false;

checklogin(){
  if(sessionStorage.getItem('user')=='true')
    this.loginlogoutbtn=true
  else
    this.loginlogoutbtn=false
}
}
