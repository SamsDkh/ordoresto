import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmedPage } from '../confirmed/confirmed.page';
import { Item } from '../Models/Item';
import { CartService } from '../Services/cart.service';
import { SharedService } from '../Services/shared.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  params: Params;
  viewType: string;
  cart: Item[] = [];
  // @Input() item: string;
  isConfirmed: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private modalController: ModalController, private cartService: CartService, private shared: SharedService) {
  }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.cart = this.cartService.getCart();
    console.log(`${this.isConfirmed}`);
  }

  setViewType(vt) {
    this.viewType = vt;
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
    return this.cartService.getTotal(this.cart);
  }

  close(){
    this.modalController.dismiss(null, 'cancel');
  }

  checkout(){
    this.cartService.checkoutCart();
    this.cartService.cancelCart();
    const isConfirmed = true;
    this.modalController.dismiss(isConfirmed, 'true');
  }

}
