import { Injectable } from "@angular/core";
import { Game } from "../home/models/game";
import { Participant } from "../home/models/participant";

@Injectable({
    providedIn: 'root' // Esto lo hace disponible en toda la aplicación
  })
  
export class Utility {
     getParticipanteCurrentGame(game : Game, participante : Participant | undefined, summonerName: string) : Participant | undefined {
        if (!participante) return game.info.participants[0];
        return game.info.participants.find((p) => p.riotIdGameName.toLowerCase() + '-' + p.riotIdTagline.toLowerCase() === summonerName.toLowerCase());
    }
    
  }