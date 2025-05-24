import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    constructor(private api :ApiService, private sig : SignalService){}
     
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
        this.sig.logIn()
       })
    }
  
  


  // 333222111333222111

}
