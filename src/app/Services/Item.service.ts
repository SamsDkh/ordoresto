import { Injectable } from '@angular/core';
import { Item } from '../Models/Item';
import { HttpClient } from '@angular/common/http';
import { servicesUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
public items: Item[];
private productServiceURL = servicesUrl.productService.baseUrl;
private getProductByEstablishmentId = servicesUrl.productService.getProductsByEstablishmentId;
constructor(private http: HttpClient) {
  this.items = [];
 }

public getItems(){
  this.http.get<Item[]>(this.productServiceURL+this.getProductByEstablishmentId+'db7ef013-6380-4940-bd82-3b815361c208').subscribe(result => {
    this.items = result;
    console.log('result : ',this.items);
  }, err => console.log('Error : ', err));
 }
}
