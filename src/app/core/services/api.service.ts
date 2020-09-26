import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
