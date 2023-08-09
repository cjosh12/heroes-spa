import { Hero, heroes } from "..";


export const GetHeroById = (id:string|undefined):Hero | undefined =>{
    return heroes.find(hero=>hero.id===id);
}