import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ConfirmedPage } from '../confirmed/confirmed.page';
import { Item } from '../Models/Item';
import { CartService } from '../Services/cart.service';
import {SharedService} from '../Services/shared.service';
@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {
  viewType: string;
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  constructor(private shared: SharedService, private modalController: ModalController, private cartService: CartService) { }
  itemInfo: Item;
  ngOnInit() {
   this.itemInfo = this.shared.getMessage();
   console.log(this.itemInfo.ingredients);
   this.cart = this.cartService.getCart();
   this.cartItemCount = this.cartService.getCartItemCount();
  }

  setViewType(vt) {
    this.viewType = vt;
  }

  item_detail() { }

  addToCart(itemInfo){
    this.cartService.addProduct(itemInfo);

  }

  confirmed() {
    this.modalController.create({ component: ConfirmedPage }).then((modalElement) => {
      modalElement.present();
    }
    );
  }
}
