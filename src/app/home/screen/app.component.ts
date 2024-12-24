import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameResponse } from '../models/gameResponse';
import { ApiService } from '../service/riot_service/api.service';
import { Participant } from '../models/participant';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService]
})
export class AppComponent {
  title = 'Riot ban application';

  searchTerm: string = 'kintion-psz'; 

  games: GameResponse['data'] = []; // Lista de juegos
  
  constructor(private apiService: ApiService){}

  buscar() {
    this.games = [];
    this.apiService.getData(this.searchTerm).subscribe({
      next: (response) => {
        this.games = response.data; // Actualizamos la lista con los nuevos datos
        console.log('Datos obtenidos:', this.games);
      },
      error: (error) => {
        console.error('Error al buscar juegos:', error);
      },
    });
  }

  isSameTeam(teamId: number, participant: Participant): boolean {
      return participant.teamId === teamId;
    }
  
    getTeamResult(teamId: number, teams: any[]): string {
      const team = teams.find((t) => t.teamId === teamId);
      return team && team.win ? 'Winner' : 'Loser';
    }

}
