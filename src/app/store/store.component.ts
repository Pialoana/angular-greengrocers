// store.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  @Input() storeItems: any[] = [];
  @Output() addToCart = new EventEmitter<any>();
  @Output() navigateToCheckout = new EventEmitter<void>();
  selectedType: string = ''; // Property to store the selected type
  sortBy: string = ''; // Property to store the selected sorting criteria

  filterByType(type: string) {
    this.selectedType = type;
  }

  clearFilter() {
    this.selectedType = '';
  }

  sortByName() {
    this.sortBy = 'name';
  }

  sortByPrice() {
    this.sortBy = 'price';
  }

  clearSorting() {
    this.sortBy = '';
  }
  get sortedItems() {
    let items = [...this.storeItems];

    if (this.selectedType) {
      items = items.filter((item) => item.type === this.selectedType);
    }

    if (this.sortBy === 'price') {
      items.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }

  proceedToCheckout() {
    this.navigateToCheckout.emit();
  }
}
