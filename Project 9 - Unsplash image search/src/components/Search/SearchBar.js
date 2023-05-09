const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="container">
      <h2>
        <b>Unsplash Image Search</b>
      </h2>
      <div className="search-input">
        <input
          className="mr-3"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
