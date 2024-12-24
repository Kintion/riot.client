import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../enviroment';
import { GameResponse } from '../../models/gameResponse';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener datos
  getData(gameName : string): Observable<GameResponse> {
    return this.http.get<GameResponse>(`${this.baseUrl}/account/matches/${gameName}`).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(() => error);
      })
    );
  }
}

