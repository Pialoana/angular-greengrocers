import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-green-grocers';
  storeItems: any[] = [];
  cartItems: any[] = [];
  total: number = 0;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.getStoreItems();
  }

  getStoreItems() {
    this.storeService.getStoreItems().subscribe((items) => {
      this.storeItems = items;
    });
  }

  addToCart(item: any) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.calculateTotal();
  }

  removeFromCart(item: any) {
    const index = this.cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotal();
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
    this.calculateTotal();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeFromCart(item);
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
}
