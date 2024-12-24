import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json'; // API URL de los campeones (es ejemplo, puedes ajustarlo según la versión)
  private baseIconUrl = 'https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/'; // URL base de los íconos
  

  constructor(private http: HttpClient) { }

  // Método para obtener los campeones
  getChampions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para obtener la URL del ícono del campeón
  getChampionIconUrl(championName: string): string {
    // El nombre del campeón debe coincidir con el nombre en el archivo de la API (sin espacio y con mayúsculas)
    return `${this.baseIconUrl}$Aatrox.png`;
  }
}
