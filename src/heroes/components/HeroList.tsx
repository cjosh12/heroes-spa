import { useMemo } from "react";
import { HeroCard } from "../components";
import { getHeroesByPublisher } from "../helpers";
import { Hero } from "../interfaces";

interface HeroListProps {
  publisher: string;
}

export const HeroList = ({publisher}: HeroListProps) => {

  const heroes: Hero[] = useMemo(() => getHeroesByPublisher(publisher),[publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} {...hero}/>
        ))
      }
    </div>
  )
}
