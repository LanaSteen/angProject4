import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    constructor(private api :ApiService){}
     
    phoneNumber = ""
    password = ""
  
    reg(){
       this.api.logInUser({
          phoneNumber: this.phoneNumber,
          password: this.password,
          email: "string",
          firstName: "string",
          lastName: "string",
          role: "string" 
  
       }).subscribe((resp: any) => {
        console.log(resp.token)
        localStorage.setItem("token", resp.token)
       })
    }
  
  


  // 333222111333222111

}
