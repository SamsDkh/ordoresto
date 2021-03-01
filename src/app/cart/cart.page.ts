import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmedPage } from '../confirmed/confirmed.page';
import { Item } from '../Models/Item';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  params: Params;
  viewType: string;
  cart: Item[] = [];

  constructor(private route: ActivatedRoute, private modalController: ModalController, private cartService: CartService) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.cart = this.cartService.getCart();
    console.log(this.cart[0].amount);
  }

  setViewType(vt) {
    this.viewType = vt;
  }

  confirmed() {
    this.modalController.create({ component: ConfirmedPage }).then((modalElement) => {
      modalElement.present();
    }
    );
  }

  decreaseCartItem(item)
  {
    this.cartService.decreaseProduct(item);
  }

  increaseCarItem(item){
    this.cartService.addProduct(item);
  }

  removeCartItem(item){
    this.cartService.removeProduct(item);
  }

  getTotal(){
    return this.cart.reduce((i, j) => i + +j.price * +j.amount, 0);
  }

  close(){
    this.modalController.dismiss();
  }

  checkout(){

  }

}
