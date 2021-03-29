import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ItemTypeEnum } from '../Enums/ItemTypeEnum.enum';
import { Item } from '../Models/Item';
import {ItemService} from '../Services/Item.service';
import {SharedService} from '../Services/shared.service';
import { CartService } from '../Services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';
import { HttpClient } from '@angular/common/http';
import { ConfirmedPage } from '../confirmed/confirmed.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tab = 'popular';
  viewType: string;
  items: Item[];
  ItemTypeEnum: typeof
  ItemTypeEnum = ItemTypeEnum;
  selectedItem: string;
  message = 'item message';
  basket = [];
  cartItemCount: BehaviorSubject<number>;
  types: string[];
  // tslint:disable-next-line:max-line-length
  constructor(private route: Router, private http: HttpClient, private modalController: ModalController,
    private shared: SharedService, private cartService: CartService,
    private itemService: ItemService, private menu: MenuController) { }

  ngOnInit(): void {
    this.getItems();
    this.basket = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(item)
  {

  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  confirmed() {
    this.modalController.create({ component: ConfirmedPage }).then((modalElement) => {
      modalElement.present();});
  }

  setViewType(vt) {
    this.viewType = vt;
  }

  item_detail(itemId: Item) {
    this.shared.setMessage(itemId);
    this.route.navigate(['./item-info']);
  }

  async openCart()
  {
    const modal = await this.modalController.create({
      component: CartPage,
      cssClass: 'cart_modal',
      componentProps: {
        isConfirmed: false
      }
    });
    await modal.present();
    const {data: isConfirmed} = await modal.onDidDismiss();
    console.log(isConfirmed);
    if (isConfirmed){
      this.confirmed();
    }
  }

  getItems(){
    this.itemService.getItems().then(res => {
      this.items = res;
      this.types = [];
      this.types.push('Popular');
      console.log('items = ',this.items);
      this.items.forEach(element => {
        this.types.push(element.typeName);
      });
      console.log('types = ', this.types);
    });
  }

}
