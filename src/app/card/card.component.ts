import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {


  childText!: string
  @Output() text : EventEmitter<string> = new EventEmitter()


  sendToParent(){ 
    this.text.emit(this.childText)
  }
}
