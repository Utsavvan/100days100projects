import { createRoot } from "react-dom/client";
import { useState } from "react";

import { searchPhotos } from "./utils/Apis/unsplashApi";
import Cards from "./components/Card/Cards";
import SearchBar from "./components/Search/SearchBar";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  async function handleSearch() {
    const data = await searchPhotos(search);

    const photosExtract = data.results.map((photo) => {
      return photo.urls.small;
    });

    setPhotos(photosExtract);
    setSearch("");
  }

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <Cards photos={photos} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
