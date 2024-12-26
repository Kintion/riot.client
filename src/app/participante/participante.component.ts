import { Component, Input } from '@angular/core';
import { Utility } from '../shared/utility';
import { Game } from '../home/models/game';
import { Participant } from '../home/models/participant';
import summonerSpells from '../assets/summoner.json';
import runesReforged from '../assets/runesReforged.json';


@Component({
  selector: 'app-participante',
  imports: [],
  templateUrl: './participante.component.html',
  styleUrl: './participante.component.css'
})
export class ParticipanteComponent {

  @Input() summonerName!: string;
  @Input() participante!: Participant;
  @Input() game!: Game;

  
  private readonly baseImageUrlRunes = 'http://ddragon.leagueoflegends.com/cdn/img/';
  
  private readonly baseImageUrlSpell = 'http://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/';

  constructor(private utilityService: Utility){}
  
  getParticipanteCurrentGame(game: Game) : Participant | undefined {
    return this.utilityService.getParticipanteCurrentGame(game, this.participante, this.summonerName);
  }

  getSummonerSpellUrl(summonerSpell: number) : string | null{
    const spells: { [key: string]: any } = summonerSpells.data;

    for (const spellId in spells) {
      if (spells[spellId].key === summonerSpell.toString()) {
        return this.baseImageUrlSpell + spells[spellId].image.full;
      }
    }

    return null; 
    }

    getRuneImageById(runeId: number): string | null {
      for (const style of runesReforged) {
            if (style.id === runeId) {
              return this.baseImageUrlRunes + style.icon;
          
        }
      }
      return null;
    }

    getMainRuneImageById(runeId: number): string | null {
      for (const style of runesReforged) {
        for (const slot of style.slots) {
          for (const rune of slot.runes) {
            if (rune.id === runeId) {
              return this.baseImageUrlRunes + rune.icon;
            }
          }
        }
      }

      return null; 
    }


    calculateKDA(participant: Participant): string {
      if(participant.deaths === 0 && participant.assists === 0 && participant.kills === 0) return '0.00:1 KDA';
      if(participant.deaths === 0) return 'Perfect KDA';
      return ((participant.kills + participant.assists) / participant.deaths).toFixed(2) + ':1 KDA';   
    }


    
}
