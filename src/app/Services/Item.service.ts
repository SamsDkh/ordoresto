import { Injectable } from '@angular/core';
import { Item } from '../Models/Item';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
public items: Item[];

constructor(private http: HttpClient) {
  this.items = [];
 }


public getItems(){
  this.http.get<Item[]>('http://productstaging.eu-west-3.elasticbeanstalk.com/Product').subscribe(result => {
    this.items = result;
    console.log('result : ',this.items);
  }, err => console.log('Error : ', err));
 }
}
