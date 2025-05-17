import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
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

}
