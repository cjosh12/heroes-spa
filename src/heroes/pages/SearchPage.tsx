import { useLocation, useNavigate } from "react-router-dom";
import { Hero, HeroCard } from ".."
import { useForm } from "../hooks/useForm"
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)
  const heroes: Hero[] = getHeroesByName(q as string);
  console.log(heroes);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });


  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row"> <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
          <button type="submit" className="btn btn-outline-primary pt-1">
            Search
          </button>
        </form>
      </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">
            Search a Hero
          </div>
          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>
          {
            heroes.map(hero => (<HeroCard key={hero.id}{...hero} />))
          }
        </div>
      </div>
    </>
  )
}
