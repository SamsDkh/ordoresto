import { Injectable } from '@angular/core';
import { Item } from '../Models/Item';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
message: Item;
constructor() { }

setMessage(data){
this.message = data;
}

getMessage(){
  return this.message;
}

}
