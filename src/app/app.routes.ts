
import { Routes } from '@angular/router';
import { LoginComponent } from './Project/login/login.component';
import { LogoutComponent } from './Project/logout/logout.component';
import { HeaderComponent } from './Project/header/header.component';
import { SigninComponent } from './Project/signin/signin.component';
import { RegisterComponent } from './Project/register/register.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'header',component:HeaderComponent},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
];


