import { Component, Input } from '@angular/core';
import { Participant } from '../home/models/participant';
import { CommonModule } from '@angular/common';
import { Game } from '../home/models/game';


@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  @Input() summonerName!: string;

  @Input() game!: Game;

  @Input() teamId!: number;


  isMain(participant: Participant): boolean {
    return participant.riotIdGameName.toLowerCase() + '-' + participant.riotIdTagline.toLowerCase() === this.summonerName.toLowerCase();
  }
  
  isSameTeam(teamId: number, participant: Participant): boolean {
    return participant.teamId === teamId;
  }

}
