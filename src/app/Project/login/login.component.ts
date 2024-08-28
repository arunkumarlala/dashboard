import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router ,Route} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router:any;
  constructor(router:Router){
    this.router=router;
  }
 dologin(){
  sessionStorage.setItem('user','true');
  this.router.navigate(['signin']);
 }


}
