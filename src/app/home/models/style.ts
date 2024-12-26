import { Description } from "./description";
import { Selection } from "./selection";

export interface Style{
    description: Description,
    selections: Selection[],
    style: number
}