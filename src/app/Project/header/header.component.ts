import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "../login/login.component";
import { LogoutComponent } from "../logout/logout.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, LoginComponent, LogoutComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
loginlogoutbtn:boolean=false;

getsessitem(){
  return sessionStorage.getItem('user')||'false';
}
}
