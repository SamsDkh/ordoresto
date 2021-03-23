import { Injectable } from '@angular/core';
import { Item } from '../Models/Item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.staging';
import { devURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
public items: Item[];

constructor(private http: HttpClient) {
  this.items = [];
 }


public getItems(){
  this.http.get<Item[]>(devURL.productService.baseUrl+devURL.productService.getProductsByEstablishmentId+'db7ef013-6380-4940-bd82-3b815361c208').subscribe(result => {
    this.items = result;
    console.log('result : ',this.items);
  }, err => console.log('Error : ', err));
 }
}
