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
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<Order> {
    console.log('reaching ', this.orderUrl+this.postUrl);
    return this.http.post<Order>(this.orderUrl+this.postUrl, order, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
