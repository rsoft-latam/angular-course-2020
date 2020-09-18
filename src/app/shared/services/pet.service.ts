import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class PetService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getPets(): Observable<any> {
    return this.http.get(`${this.url}/pets.json`);
  }

  public addPet(product: any): Observable<any> {
    return this.http.post(`${this.url}/pets.json`, product);
  }

  public deletePet(id: any): Observable<any> {
    return this.http.delete(`${this.url}/pets/${id}.json`);
  }

  public updatePet(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/pets/${id}.json`, product);
  }

}
