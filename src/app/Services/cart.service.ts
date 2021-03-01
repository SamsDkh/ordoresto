import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemTypeEnum } from '../Enums/ItemTypeEnum.enum';
import { Item } from '../Models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
data: Item[] = [
  {
    id: '0',
    name: 'Cream Pancake',
  price: 12.00,
  type: ItemTypeEnum.dessert,
  description: 'Lorepm esum....',
cooking: '8',
energy: '250',
ingredients: ['sucre', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '2',
img: 'assets/images/1.png',
vid: '',
amount: 0},
{
id: '1',
name: 'White Source Pasta',
price: 8.00,
type: ItemTypeEnum.main,
description: 'Lorepm esum....',
cooking: '1',
energy: '280',
ingredients: ['feu', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '2',
img: 'assets/images/2.png',
vid: '',
amount: 0},
{
id: '2',
name: 'Farm Villa Pizza',
price: 12.00,
type: ItemTypeEnum.starter,
description: 'Lorepm esum....',
cooking: '8',
energy: '250',
ingredients: ['sucre', 'sirop derable', 'farine', 'eau'],
options: null,
serving: '3',
img: 'assets/images/3.png',
vid: '',
amount: 0},
];
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount()
  {
    return this.cartItemCount;
  }

  addProduct(item){
    let added = false;

    for(let p of this.cart){
      if (p.id === item.id){
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added){
      this.cart.push(item);
      item.amount += 1;
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(item){
    for(let [index, p] of this.cart.entries()){
      if(p.id === item.id){
        p.amount -= 1;
        if (p.amount === 0){
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(item){
    for(let [index, p] of this.cart.entries()){
      if(p.id === item.id){
          this.cartItemCount.next(this.cartItemCount.value - p.amount);
          this.cart.splice(index, 1);
      }
    }
  }

}
