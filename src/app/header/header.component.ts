import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonComponent, CardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  welcomeUserName! : string
getUerName(userName: string){
   this.welcomeUserName = userName
}

greetnig!:string

getFromChild(text : any){
   this.greetnig = text
}
}
