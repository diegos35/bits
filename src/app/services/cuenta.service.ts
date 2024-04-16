import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Cliente';
import { Cuenta } from '../Cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private apiUrl = 'http://localhost:8080/api/cuentas';

  private apiChunk = 'https://api.chucknorris.io/jokes/random';
  constructor(private http: HttpClient) { }



  getAllAccounts(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(this.apiUrl);
  }

  getAccountById(id: number): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(`${this.apiUrl}/${id}`);
  }

  createCuenta(cuenta: any): Observable<Cuenta> {
    return this.http.post<Cuenta>(this.apiUrl, cuenta);
  }


  updateCuenta(id: number, cuenta: Cuenta): Observable<Cuenta> {
    return this.http.put<Cuenta>(`${this.apiUrl}/${id}`, cuenta);
  }


  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getChunk(): Observable<any> {
    return this.http.get<any>(this.apiChunk);
  }
}
