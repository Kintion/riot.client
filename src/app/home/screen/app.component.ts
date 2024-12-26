import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameResponse } from '../models/gameResponse';
import { ApiService } from '../service/riot_service/api.service';
import { Participant } from '../models/participant';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Game } from '../models/game';

import { TeamComponent } from "../../team/team.component"; 
import { Utility } from '../../shared/utility';
import { ItemsComponent } from "../../items/items.component";
import { ParticipanteComponent } from "../../participante/participante.component";



@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, HttpClientModule, MatProgressSpinnerModule, TeamComponent, ItemsComponent, ParticipanteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService]
})
export class AppComponent {
  title = 'Riot ban application';

  searchTerm: string = 'Ella-uwu'; 

  summonerName: string = ''; 

  participante: Participant | undefined = undefined;

  cargando: boolean = false;

  games: GameResponse['data'] = []; // Lista de juegos



  
  constructor(private apiService: ApiService, private utilityService: Utility){}

  buscar() {
    this.cargando = true;
    console.log('cargando...', this.cargando);

    this.games = [];
    this.apiService.getData(this.searchTerm).subscribe({
      next: (response) => {
        this.games = response.data;
        this.summonerName = this.searchTerm; 
        this.participante = this.games[0].info.participants.find((p) => p.riotIdGameName.toLowerCase() + '-' + p.riotIdTagline.toLowerCase() === this.summonerName.toLowerCase());// Actualizamos la lista con los nuevos datos
        console.log('Datos obtenidos:', this.games);
      },
      error: (error) => {
        console.error('Error al buscar juegos:', error);
      },complete: () => {
        this.cargando = false;
        console.log('cargando...', this.cargando);

      }
      
    });
  }

    getParticipanteCurrentGame(game: Game) : Participant | undefined {
      return this.utilityService.getParticipanteCurrentGame(game, this.participante, this.summonerName);
    }
 
  
    getTeamResult(teamId: number, teams: any[]): string {
      const team = teams.find((t) => t.teamId === teamId);
      return team && team.win ? 'Winner' : 'Loser';
    }

    Won(game: Game): boolean | null{
      if (!this.participante) return false;
      const participant = game.info.participants.find((t) => t.riotIdGameName.toLowerCase() + '-' + t.riotIdTagline.toLowerCase() === this.summonerName.toLowerCase());
      const team = participant!.teamId;
      return game.info.teams.find(t => t.teamId === team)?.win?? null;
    }


    
    getResultGame(game: Game): string{
      return this.Won(game)? 'Victoria' : 'Derrota';
    }

     tiempoDesdeUltimaPartida(timestamp: number): string {
      const now = Date.now(); // Fecha y hora actuales en milisegundos
      const difference = now - timestamp; // Diferencia entre ahora y el timestamp dado
    
      // Conversión de milisegundos a intervalos relevantes
      const seconds = Math.floor(difference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
    
      if (seconds < 60) {
        return `hace ${seconds} segundo${seconds !== 1 ? 's' : ''}`;
      } else if (minutes < 60) {
        return `hace ${minutes} minuto${minutes !== 1 ? 's' : ''}`;
      } else if (hours < 24) {
        return `hace ${hours} hora${hours !== 1 ? 's' : ''}`;
      } else {
        return `hace ${days} día${days !== 1 ? 's' : ''}`;
      }
    }


  
    
}
