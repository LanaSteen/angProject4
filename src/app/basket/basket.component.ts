import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {

  constructor(private api: ApiService){

  }
   

  addTocart(id:number, price : number){

    let postObj = {
        quantity: 50,
        price: price ,
        productId: id
    }

    this.api.addToCart(postObj).subscribe(resp => {
      console.log(resp)
    })


    
  }
   

  deleteFromBasker(id : number){
    this.api.deletCart(id).subscribe(resp => {
      console.log(resp)
    })
  }


}




