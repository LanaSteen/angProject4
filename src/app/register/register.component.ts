import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private api :ApiService){}
   
  phoneNumber = ""
  password = ""

  reg(){
     this.api.registerUser({
        phoneNumber: this.phoneNumber,
        password: this.password,
        email: "string",
        firstName: "string",
        lastName: "string",
        role: "string" 

     }).subscribe(resp => console.log(resp))
  }




}
