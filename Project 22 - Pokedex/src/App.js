import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  const [pokeDex, setPokeDex] = useState();

  useEffect(() => {
    getPokeData();
  }, [url]);

  async function getPokeData() {
    const response = await fetch(url);
    const data = await response.json();
    getPokemon(data.results);
    setPrevUrl(data.previous);
    setNextUrl(data.next);
  }

  async function getPokemon(results) {
    const data = results.map(async (result) => {
      const url = result.url;
      const response = await fetch(url);
      const data = await response.json();
      setPokeData((prevData) => [...prevData, data]);
    });
  }

  return (
    <>
      <div className="container">
        <h1>Pokedex</h1>
        <div className="content-cont flex">
          <div className="pokemon-list ">
            <ul>
              {pokeData.map((pokemon) => (
                <li key={pokemon.id} onClick={() => setPokeDex(pokemon)}>
                  <div className="pokemon-list-item flex ">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                      alt=""
                    />
                    <p>{pokemon.name}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="buttons">
              {prevUrl && (
                <button
                  onClick={() => {
                    setPokeData([]);
                    setUrl(prevUrl);
                  }}
                >
                  Prev
                </button>
              )}
              {nextUrl && (
                <button
                  onClick={() => {
                    setPokeData([]);
                    setUrl(nextUrl);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
          <div className="pokemon-info">
            {pokeDex ? (
              <div className="pokemon-information">
                <div className="pokemon-image">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDex.id}.png`}
                    alt=""
                  />
                </div>
                <div className="ability-info">
                  {pokeDex.abilities.map((ability) => {
                    return (
                      <>
                        <p>{ability.ability.name}</p>
                      </>
                    );
                  })}
                </div>
                <div className="basic-states">
                    {
                        pokeDex.stats.map(stat => {
                                return (
                                    <p>{stat.stat.name} : {stat.base_stat}</p>
                                )
                        })
                    }
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
