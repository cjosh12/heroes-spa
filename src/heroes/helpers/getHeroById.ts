import { heroes } from "../data";
import { Hero } from "../interfaces";


export const GetHeroById = (id: string | undefined): Hero | undefined => {
  return heroes.find(hero => hero.id === id);
}