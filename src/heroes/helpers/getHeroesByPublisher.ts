import { heroes } from "../data";
import { Hero } from "../interfaces";

export const getHeroesByPublisher = (publisher: string): Hero[] => {
  const validPublishers: string[] = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error (`Publisher ${publisher} is not valid`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
}
