import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {

  constructor(private api: ApiService, private route : Router){

  }
   

  addTocart(id:number, price : number){
    if(localStorage.getItem("token")  != null ||  localStorage.getItem("token") != undefined){
         let postObj = {
               quantity: 50,
               price: price ,
               productId: id
           }
         
           this.api.addToCart(postObj).subscribe(resp => {
             console.log(resp)
           })

         
           }
           else{
              this.route.navigateByUrl('/login')
           }
    
  }
   

  deleteFromBasker(id : number){
    this.api.deletCart(id).subscribe(resp => {
      console.log(resp)
    })
  }


}




