import { Game } from "./game";

export interface GameResponse {
    data: Game[];  // Una lista de objetos Game
    message: string;
  }