import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private api : ApiService, private route : Router, private src : ViewportScroller){}

  hotelArr : any[] = []

  buttonTExt= "Show"

  isToken = false

  ngOnInit(){
     
     localStorage.getItem("token") ? this.isToken = true : this.isToken = false


     
    this.api.getAll().subscribe((resp:any) => {
      console.log(resp)
      this.hotelArr = resp
    })
  }
scroll(){
  this.src.scrollToAnchor("foot")
}

  fun(){
    if(this.isToken){

      console.log("You are logged in")

      this.route.navigateByUrl("/home")



    }
    else{
      alert("SOS")
    }
  }

}
