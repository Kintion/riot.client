import { Participant } from "./participant";
import { Team } from "./team";

  

  export interface GameInfo {
    gameDuration: number;
    gameVersion: string;
    participants: Participant[];
    platformId: string;
    queueId: number;
    teams: Team[];
  }
  

  
 
    