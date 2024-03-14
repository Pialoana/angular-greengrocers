import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() cartItems: any[] = [];
  @Output() increaseQuantity = new EventEmitter<any>();
  @Output() decreaseQuantity = new EventEmitter<any>();
}
