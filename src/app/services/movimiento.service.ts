import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Cliente';
import { Cuenta } from '../Cuenta';
import { Movimiento } from '../movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
  private apiUrl = 'http://localhost:8080/api/movimientos';

  constructor(private http: HttpClient) { }


    obtenerMovimientosPorCuentaId(cuentaId: number): Observable<Movimiento[]> {
      return this.http.get<Movimiento[]>(`${this.apiUrl}/${cuentaId}`);
    }

  agregarMovimiento(movimiento: Movimiento): Observable<Movimiento> {
    return this.http.post<Movimiento>(this.apiUrl,movimiento);
  }




}
