import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rank',
  imports: [],
  templateUrl: './rank.component.html',
  styleUrl: './rank.component.css'
})
export class RankComponent {

  
  @Input() queueName!: string; 
  @Input() lps!: number;
  @Input() rango!: string;
  @Input() imagepath!: string;
  @Input() wins!: number;
  @Input() loses!: number;


  getWinRate(): number {
    return Math.round(this.wins / (this.wins + this.loses) * 100);
  }
}
