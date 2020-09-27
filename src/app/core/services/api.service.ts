import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { UrlApis } from './api-url.enums';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiUrlBase;

  constructor(private httpClient: HttpClient) {
  }

  getAll<Entity>(urlApi: UrlApis): Observable<HttpResponse<Entity[]>> {
    return this.httpClient.get<Entity[]>(`${this.baseUrl}/${urlApi}`, { observe: 'response' });
  }

  authentication(user: User): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(`${this.baseUrl}/users/authentication`, user, { observe: 'response' });
  }

  createCustomer(user: User): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(`${this.baseUrl}/users`, user, { observe: 'response' });
  }

  getBankById(id: string): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(`${this.baseUrl}/banks/${id}`, { observe: 'response' });
  }
  
}
