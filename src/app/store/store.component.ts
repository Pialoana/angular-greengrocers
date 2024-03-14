import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  @Input() storeItems: any[] = [];
  @Output() addToCart = new EventEmitter<any>();
}
