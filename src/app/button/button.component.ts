import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() text! : string 
  @Output() userNFromChild : EventEmitter<string> = new EventEmitter()


  userName = 'John'

  sendToParent(){
    this.userNFromChild.emit(this.userName)
  }

}
