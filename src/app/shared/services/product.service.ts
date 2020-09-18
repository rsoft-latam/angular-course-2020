import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProductService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<any> {
    return this.http.get(`${this.url}/products.json`);
  }

  public getProductsById(id: any): Observable<any> {
    return this.http.get(`${this.url}/products.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  }

  public addProduct(product: any): Observable<any> {
    return this.http.post(`${this.url}/products.json`, product);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.url}m/products/${id}.json`);
  }

  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/products/${id}.json`, product);
  }

}
