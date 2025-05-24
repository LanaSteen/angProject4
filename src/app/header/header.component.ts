import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { CardComponent } from "../card/card.component";
import { SignalService } from '../services/signal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonComponent, CardComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private sig : SignalService){
    effect(()=>{
      this.isAuth =  this.sig.isLogedIn()
    })
  }

  logOut(){
    this.sig.logOut()
    localStorage.removeItem("token")

  }


  isAuth = false
  welcomeUserName! : string
getUerName(userName: string){
   this.welcomeUserName = userName
}

greetnig!:string

getFromChild(text : any){
   this.greetnig = text
}
}
