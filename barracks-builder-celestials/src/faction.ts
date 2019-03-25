import { Weapon } from "./weapon";
import { Defense } from "./defense";
import { World } from "./world";


export class Faction {
    id: number;
    name: string;
    description: string;
    population: number[];
    world: World;
    weapons: Weapon[];
    defenses: Defense[];
  }
