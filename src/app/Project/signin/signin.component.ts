
import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
userName : string= '';
mobile:number=0;
isActive:boolean=false;
address:any='23rwgefhtd';
wordcount:number=0;
items:any[]=['apple','orange','mango'];

showwordcount(){
return this.userName.length
}


}
