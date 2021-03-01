import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ItemTypeEnum } from '../Enums/ItemTypeEnum.enum';
import { Item } from '../Models/Item';
import {ItemService} from '../Services/Item.service';
import {SharedService} from '../Services/shared.service';
import {CartPageModule} from '../cart/cart.module';
import { CartService } from '../Services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tab = 'popular';
  viewType: string;
  itemService: ItemService;
  items: Item[];
  itemType: ItemTypeEnum;
  selectedItem: string;
  message = 'item message';
  basket = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  constructor(private route: Router, private modalController: ModalController, private shared: SharedService, private cartService: CartService) { }

  ngOnInit(): void {
    this.itemService = new ItemService();
    this.items = this.itemService.getItems();

    this.products = this.cartService.getProducts();
    this.basket = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(item)
  {

  }

  setViewType(vt) {
    this.viewType = vt;
  }
  item_detail(itemId: Item) {
    this.shared.setMessage(itemId);
    this.route.navigate(['./item-info']);
  }

  cart(vt)
  {
    this.viewType = vt;
    this.route.navigate(['./cart']);
  }

  async openCart()
  {
    let modal = await this.modalController.create({
      component: CartPage,
      cssClass: 'cart_modal'
    });
    modal.present();
  }
  getItems(){
    // this.items = this.itemService.getItems();
  }

}
