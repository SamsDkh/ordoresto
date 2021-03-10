import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemTypeEnum } from '../Enums/ItemTypeEnum.enum';
import { Item } from '../Models/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  private totalCart: number;

  constructor(private http: HttpClient) {
    this.http = http;
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
    console.log('item id : ' + item.id);
    for(const p of this.cart){
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
    for(const [index, p] of this.cart.entries()){
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
    for(const [index, p] of this.cart.entries()){
      if(p.id === item.id){
          this.cartItemCount.next(this.cartItemCount.value - p.amount);
          this.cart.splice(index, 1);
      }
    }
  }

  cancelCart(){
    this.cart = [];
  }

  getTotal(cart: Item[]) {
    this.totalCart = cart.reduce((i, j) => i + +j.price * +j.amount, 0);
    return this.totalCart;
  }

  checkoutCart(){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const newOrder = new Order();
    newOrder.TotalWithTax = this.totalCart;
    newOrder.ItemAmount = this.cartItemCount.value;
    newOrder.ItemsOrder = [];
    this.cart.forEach(element => {
      newOrder.ItemsOrder.push(element);
    });
    console.log(newOrder);
    this.http.post<Order>('https://localhost:49226/Order', newOrder, {headers}).toPromise().then(result =>
    {
      console.log(result);
    });
  }

}
