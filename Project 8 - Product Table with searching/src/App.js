import { createRoot } from "react-dom/client";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ file: App.js:7 ~ App ~ products:", products);

  const [header, setHeader] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleSearch() {
    const result = products.filter((product) => {
      return Object.keys(product).some((key) =>
        product[key].toString().toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredProducts(result);
  }

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    let data = await response.json();

    data.products.forEach((product) => {
      delete product.thumbnail;
      delete product.images;
    });

    setProducts(data.products);
    setFilteredProducts(data.products);
    setHeader(Object.keys(data.products[0]));
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container text-center">
        <b>
          <h1>Product table with searching option</h1>
        </b>
      </div>
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid m-3">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={() => handleSearch()}
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                onClick={handleSearch}
                type="button"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="container">
        <table className="table table-bordered border-black">
          <thead>
            <tr>
              {header.length !== 0 &&
                header.map((header, i) => (
                  <th key={i} scope="col">
                    {header.toUpperCase()}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length !== 0 &&
              filteredProducts.map((products, i) => (
                <tr key={i}>
                  {Object.values(products).map((productItem) => (
                    <th key={productItem.id} scope="col">
                      {productItem}
                    </th>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
