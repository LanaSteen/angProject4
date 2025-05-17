import { Component, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private api : ApiService ){
     
  }
  menu : any

  itemAmount = signal(0)






  ngOnInit(){
      this.api.getAllMenu().subscribe(resp => {
          console.log(resp)
          this.menu = resp

      })
  }

  increase(amount : number, id:number, price : number){
    this.itemAmount.set(amount+1)
    console.log(this.itemAmount)


    this.api.update2Cart({
          quantity: this.itemAmount,
          price:price,
          productId: id
    }).subscribe(resp => console.log(resp))

  }

  decriease(amount : number, id:number, price : number){
    this.itemAmount.set(amount-1)
    console.log(this.itemAmount)


    this.api.update2Cart({
          quantity: this.itemAmount,
          price:price,
          productId: id
    }).subscribe(resp => console.log(resp))

  }
}
