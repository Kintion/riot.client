import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../home/service/riot_service/api.service';
import { GameResponse } from '../home/models/gameResponse';
import { Participant } from '../home/models/participant';

@Component({
  selector: 'app-historico-partidas',
  imports: [CommonModule, FormsModule],
  templateUrl: './historico-partidas.component.html',
  styleUrl: './historico-partidas.component.css'
})
export class HistoricoPartidasComponent implements OnInit {
  title = 'riotApiClient';

  games: GameResponse['data'] = []; // Lista de juegos
  searchTerm: string = ''; // Término de búsqueda

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Cargar juegos por defecto (opcional)
    this.apiService.getData('kintion-psz').subscribe({
      next: (response) => {
        this.games = response.data;
      },
      error: (error) => console.error('Error:', error),
    });
  }

  buscar(): void {
    if (this.searchTerm.trim() === '') {
      console.warn('El término de búsqueda está vacío.');
      return;
    }

    console.log('Buscando para:', this.searchTerm); // Depuración

    this.apiService.getData(this.searchTerm).subscribe({
      next: (response) => {
        this.games = response.data; // Actualizamos la lista con los nuevos datos
        console.log('Datos obtenidos:', this.games);
      },
      error: (error) => {
        console.error('Error al buscar juegos:', error);
        this.games = []; // Limpia los juegos si la búsqueda falla
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