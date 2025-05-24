import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }


  isLogedIn = signal(false)

  logIn(){
    this.isLogedIn.set(true)
   
  }

  logOut(){
    this.isLogedIn.set(false)
  }


}
