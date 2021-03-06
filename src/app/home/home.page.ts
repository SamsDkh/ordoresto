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
  types: Set<string>;
  cartEnable: boolean = false;
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
    this.cartService.addProduct(item);
  }

  decreaseFromCart(item)
  {
    this.cartService.decreaseProduct(item);
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
    this.route.navigate(['./item-info']).then(res => {
      console.log('fin');
    });
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
      this.cartItemCount = this.cartService.getCartItemCount();
      console.log('cartitemcount : ',this.cartItemCount);
      this.confirmed();
      this.getItems();
    }
  }

  getItems(){
    this.itemService.getItems().then(res => {
      this.items = res;
      this.types = new Set();
      const typesDuplicate = [];
      this.types.add('Popular');
      console.log('items = ',this.items);
      this.items.forEach(element => {
        typesDuplicate.push(element.typeName);
      });
      this.types = new Set(typesDuplicate);
      console.log('types = ', this.types);
    });
  }

}
