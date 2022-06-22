import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from 'src/app/model/shopping-item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList : ShoppingItem[];
  name: string;
  quantity?: number;

  constructor() {
    this.shoppingList = [];
    this.name = '';
    this.quantity;
   }

  ngOnInit(): void {
    this.shoppingList.push(new ShoppingItem('Milk', 1));
  }

  addItem():void {
    this.shoppingList.push(new ShoppingItem(this.name, this.quantity? this.quantity: 1));
    console.log(this.shoppingList);
  }
  onRemoveItem(index: number): void {
    this.shoppingList.splice(index, 1);

  }

  onDecreaseQuantity(index: number): void {
    this.shoppingList[index].quantity--;
  }

  onMarkAsImportant(index: number): void {
    this.shoppingList[index].markAsImportant();
  }

  getClass(index: number): string {
    if (index % 2 === 0) {
      return 'itemCard itemCardEven';
    } else {
      return 'itemCard itemCardOdd';
    }
  }

}
