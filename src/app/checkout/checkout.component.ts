// checkout.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Input() cartItems: any[] = [];
  @Input() total: number = 0;
  @Output() increaseQuantity = new EventEmitter<any>();
  @Output() decreaseQuantity = new EventEmitter<any>();
  @Output() navigateToStore = new EventEmitter<void>();

  // Method to emit event to navigate back to the store
  proceedToStore() {
    this.navigateToStore.emit();
  }
}
