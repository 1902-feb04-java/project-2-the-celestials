import { User } from "./user";
export class World {
    id: number;
    name: string;
    description: string;
    tags: number[];
    user: User;
    locations: number[];
    factions: number[];
  }