import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAll(){
        return this.http.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }

  getById(id : number){
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
  }
  

  book(postObj : any){
    return this.http.post('https://hotelbooking.stepprojects.ge/api/Booking', postObj)
  }



   getRoomById(id : number){
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }

  addToCart(postObj123 : Cart){
      return this.http.post('https://restaurant.stepprojects.ge/api/Baskets/AddToBasket', postObj123)
  }

  updateCart(obj : any){
  return this.http.put('https://restaurant.stepprojects.ge/api/Baskets/AddToBasket', obj)
  }

  deletCart(id :number){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }

  getAllMenu(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Baskets/GetAll`)
       
  }

  update2Cart(postObj : any){
    return this.http.put('https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket', postObj)
  }

  registerUser(postObj : any){
    return this.http.post('https://rentcar.stepprojects.ge/api/Users/register', postObj)
  }

   logInUser(postObj : any){
    return this.http.post('https://rentcar.stepprojects.ge/api/Users/login', postObj)
  }
}
