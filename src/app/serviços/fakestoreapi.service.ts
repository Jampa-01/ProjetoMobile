import { HttpClient } from '@angular/common/http';               // vem automatico após a injeção
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakestoreapiService {
  private fakestoreUrl = 'https://fakestoreapi.com/products';   // "Endereço de comunicação"(Endpoint da API)

  constructor(private http: HttpClient) { }                     // injeção da Http Client

  getProdutos(): Observable<any> {
    return this.http.get<any>(this.fakestoreUrl);               //get dos dados pelo link

  }
}
