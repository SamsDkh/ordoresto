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

public async getItems(){
  try {
    const establishmentId = 'dfe56594-0a48-4107-a9f5-2aabdc87e836';
    const data = await this.getHttpAsync<Item[]>(this.productServiceURL+this.getProductByEstablishmentId+establishmentId);
  console.log('data : ',data);
  return data;
  } catch (error) {
    console.log('error : ',error);
  }
 }

 public async getHttpAsync<T>(request: RequestInfo): Promise<T>{
  const response = await fetch(request);
  
  try {
    const body = await response.json();
    return body;
  } catch (error) {}
  if(!response.ok){
    throw new Error(response.statusText);
  }
 } 

}
