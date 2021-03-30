import { Injectable } from '@angular/core';
import { Order } from '../Models/Order';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { servicesUrl } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = servicesUrl.orderservice.baseUrl;
  private postUrl = servicesUrl.orderservice.addOrder;
  
  constructor(private http: HttpClient) { }

  public async addOrder(order: Order){
    try {
      const data = await this.postHttpAsync(this.orderUrl+this.postUrl, order);
    console.log('data : ',data);
    return data;
    } catch (error) {
      console.log('error : ',error);
    }
   }
  
   public async postHttpAsync<T>(request: RequestInfo, data: T): Promise<T>{
    const response = await fetch(request, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    try {
      const body = await response.json();
      return body;
    } catch (error) {}
    if(!response.ok){
      throw new Error(response.statusText);
    }
   } 
}
