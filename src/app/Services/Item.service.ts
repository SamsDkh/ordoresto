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
  this.http.get<Item[]>('http://itemapi.eu-west-3.elasticbeanstalk.com/Item').subscribe(result => {
    this.items = result;
    console.log(this.items);
  });
 }
}
