import { Injectable } from '@angular/core';
import { Item } from '../Models/Item';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
itemInfo: Item;

constructor() {
}

setMessage(data){
this.itemInfo = data;
}

getMessage(){
  return this.itemInfo;
}

}
