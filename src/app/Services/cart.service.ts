import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemTypeEnum } from '../Enums/ItemTypeEnum.enum';
import { Item } from '../Models/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../Models/Order';
import { OrderService } from '../Services/order.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : Item[] = [];
  private cartItemCount = new BehaviorSubject(0);
  private totalCart: number;
  private orders : Order[];
  constructor(private http: HttpClient, private orderService: OrderService) {
    this.http = http;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount()
  {
    return this.cartItemCount;
  }

  addProduct(item : Item){
    let added = false;
    console.log('item to add : ',item);
    for(const p of this.cart){
      if (p.productId === item.productId){
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added){
      item.amount = 0;
      item.amount += 1;
      console.log('added item : ', item);
      this.cart.push(item);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(item : Item){
    for(const [index, p] of this.cart.entries()){
      if(p.productId === item.productId){
        p.amount -= 1;
        if (p.amount === 0){
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(item : Item){
    for(const [index, p] of this.cart.entries()){
      if(p.productId === item.productId){
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
    this.orders = [];
    const newOrder = new Order();
    newOrder.TotalWithTax = this.totalCart;
    newOrder.ItemAmount = this.cartItemCount.value;
    newOrder.Total = this.totalCart;
    newOrder.EstablishmentId = this.cart[0].establishmentId;
    newOrder.Items = [];
    this.cart.forEach(element => {
      console.log('elm : ', element);
      newOrder.Items.push(element);
    });
    console.log(newOrder);
    
    this.orderService.addOrder(newOrder).then(res => {
      const result = res;
      console.log('result : ', result);
    });

    console.log(this.orders);
    this.cartItemCount = new BehaviorSubject(0);
  }

}
