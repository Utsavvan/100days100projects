import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import Recipes from "./Recipes/Recipes";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const initialKeyWords = ["milkShake","dhosa","pav bhaji","methi paratha"]

  const defaultRecipes = Math.floor(Math.random() * initialKeyWords.length);

  const [search, setSearch] = useState(initialKeyWords[defaultRecipes]);

  const APP_ID = "5fd5ec86";
  const APP_SECRET = "460b32ca21be55b1b32589ea9d54045c";
  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_SECRET}`;

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const response = await fetch(API_URL);
    const recipesdata = await response.json();
    setRecipes(recipesdata.hits);
  }

  function submitHandler(e) {
    e.preventDefault();
    getRecipes();
  }

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler} action="">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name=""
            id=""
          />
          <button>Search</button>
        </form>
      </div>
      <hr />
      <div className="container">
        <div className="card-deck flex flex-wrap mb-3 text-center">
          <div className="row flex">
            {recipes.length !== 0 &&
              recipes.map((recipes) => <Recipes recipes={recipes} />)}
          </div>
        </div>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
