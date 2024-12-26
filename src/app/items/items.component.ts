import { Component, Input } from '@angular/core';
import { Utility } from '../shared/utility';
import { Game } from '../home/models/game';
import { Participant } from '../home/models/participant';

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  @Input() summonerName!: string;
  @Input() participante!: Participant;
  @Input() game!: Game;

  constructor(private utilityService: Utility){}

  getParticipanteCurrentGame(game: Game) : Participant | undefined {
          return this.utilityService.getParticipanteCurrentGame(game, this.participante, this.summonerName);
  }
  
}
