import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(private router : ActivatedRoute, private api : ApiService){
    this.router.params.subscribe(data => {
      console.log(data['id'])
      this.hotelId =data['id']
    })
  }

  hotelId! :number
  singleHotl : any 
  ngOnInit(){
    this.api.getById(this.hotelId).subscribe(resp => {
      console.log(resp)
      this.singleHotl = resp
    })
  }
checkInDate : Date = new Date
checkOutDate : Date = new Date
priceFrom : number = 0
priceTo : number = 5000
maximumGuests : number = 1

  filter(){
    
    //  roomTypeId: 0,
    //  priceFrom: 0,
    //  priceTo: 0,
    //  maximumGuests: 0,
    //  checkIn: "2025-05-20T12:03:08.201Z",
    //  checkOut: "2025-05-20T12:03:08.201Z"}

    this.api.filterRoom({
       priceFrom: this.priceFrom,
       priceTo: this.priceTo,
       maximumGuests: this.maximumGuests,
       checkIn: this.checkInDate,
       checkOut: this.checkOutDate
    }).subscribe(resp => {
      console.log(resp)
      this.singleHotl.rooms = resp
    })
  }

  reset(){
      this.checkInDate = new Date
      this.checkOutDate  = new Date
      this.priceFrom  = 0
      this.priceTo  = 5000
      this.maximumGuests  = 1


      this.api.getById(this.hotelId).subscribe(resp => {
      console.log(resp)
      this.singleHotl = resp
    })
  }

}
