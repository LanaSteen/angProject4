import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss'
})
export class RoomDetailsComponent {

    constructor(private router : ActivatedRoute, private api : ApiService){
      this.router.params.subscribe(data => {
        console.log(data['id'])
        this.roomId =data['id']
      })
    }

 ngOnInit(){
    this.api.getRoomById(this.roomId).subscribe(resp => {
      console.log(resp)
      this.singleRoom = resp
    })
  }

    singleRoom : any
    roomId = 0

    checkInDate = new Date
    checkOutDate  = new Date
    customerName = ""
    customerId = ""
    customerPhone = ""


    book(){
        this.api.book({
            roomID  : this.singleRoom.id,
            checkInDate : this.checkInDate,
            checkOutDate  : this.checkOutDate,
            totalPrice : 100,
            customerName : this.customerName,
            customerId : this.customerId,
            customerPhone :this.customerPhone,
        }).subscribe(resp => console.log(resp))
    }
  //         <!-- 
  // "checkInDate": "2025-05-17T12:40:49.812Z",
  // "checkOutDate": "2025-05-17T12:40:49.812Z",
  // "customerName": "string",
  // "customerId": "string",
  // "customerPhone": "string" -->
  

}
