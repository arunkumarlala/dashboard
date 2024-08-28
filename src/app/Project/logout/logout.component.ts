import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
dologout(){
  sessionStorage.setItem('user','false');
}
}
