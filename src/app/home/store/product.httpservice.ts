import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoHttpService {
  private ApiURL: string = 'https://60841f429b2bed0017040b2f.mockapi.io/products/';
  constructor(private httpclient: HttpClient) {}

  getToDos(): Observable<Product[]> {
    return this.httpclient.get<Product[]>(this.ApiURL);
  }

  createToDos(payload: Product): Observable<Product> {
    return this.httpclient.post<Product>(this.ApiURL, JSON.stringify(payload), {
        headers: { 'Content-Type': 'application/json' }
      });
  }

  removeToDos(payload: Product) {
    return this.httpclient.delete(this.ApiURL + payload.id, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  updateToDos(payload: Product){
  return this.httpclient.put<Product>(this.ApiURL+payload.id, JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' }
  });
}

}
