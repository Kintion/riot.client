import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../enviroment';
import { GameResponse } from '../../models/gameResponse';
import { Account } from '../../models/account';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;; 

  constructor(private http: HttpClient) {}

  getMatchHistory(puuid : string): Observable<GameResponse> {
    return this.http.get<GameResponse>(`${this.baseUrl}/MatchHistory/${puuid}`).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(() => error);
      })
    );
  }

  getAccountData(gameName : string, tagLine : string): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/Account/${gameName}/${tagLine}`).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(() => error);
      })
    );
  }

  getRankData(summonerId : string): Observable<GameResponse> {
    return this.http.get<GameResponse>(`${this.baseUrl}/Rank/${summonerId}`).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(() => error);
      })
    );
  }


}

