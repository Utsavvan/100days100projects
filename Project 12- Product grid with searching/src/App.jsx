import { useState, useEffect } from "react";
import "./App.css";

import { productApi } from "./Apis/ProductApi/ProductApi";

import {NavLink} from 'react-router-dom';

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const [filtered, setFiltered] = useState([]);

  const [brandNames, setBrandNames] = useState([]);

  const limitOfPagination = 10;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  useEffect(() => {
    getProductData();
  }, []);

  const getBrandNames = () => {
    const brandNameMaping = [
      ...new Set(
        product.slice(0, 15).map((product) => {
          return product.brand;
        })
      ),
      "All",
    ];
    setBrandNames(brandNameMaping);
  };

  async function getProductData() {
    const data = await productApi();
    setProduct(data.products);
    setFiltered(data.products);
    getBrandNames();
  }

  function searchHandler() {
    const updatedValue = product.filter((product) => {
      const title = product.title.toLowerCase();
      return title.includes(search.toLowerCase());
    });

    setFiltered(updatedValue);
  }

  function brandFilterHandler(brandName) {
    if (brandName === "All") {
      return setFiltered([...product]);
    }
    const updatedValue = product.filter((product) => {
      const brand = product.brand.toLowerCase();
      return brand.includes(brandName.toLowerCase());
    });
    setFiltered(updatedValue);
  }

  function ascendingHandler() {
    const updatedValue = [...product].sort((a, b) => {
      return a.title - b.title;
    });
    setFiltered(updatedValue);
  }

  function descendingHandler() {
    const updatedValue = [...product].reverse((a, b) => {
      return a.title + b.title;
    });
    setFiltered(updatedValue);
  }

  return (
    <>
      <div className="">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={searchHandler}
        />
        <button onClick={searchHandler}>Search</button>
      </div>
      <div className="container">filtering</div>
      <div>
        {brandNames.map((brandName, i) => (
          <button
            key={i}
            onClick={() => {
              brandFilterHandler(brandName);
            }}
          >
            {brandName}
          </button>
        ))}
      </div>

      <div className="container">Sorting</div>
      <div>
        <button onClick={ascendingHandler}>Ascending</button>
        <button onClick={descendingHandler}>Descending</button>
      </div>

      <div className="fw grid">
        {filtered.length !== 0
          ? filtered.slice(start, end).map((product) => (
              <>
                <div className="card">
              <NavLink className="" to={"/"+product.id}>
                  <div className="fw nop rel">
                    <img className="img" src={product.thumbnail}></img>
                    <span className="kuchbhi">heart</span>
                  </div>
                  <div className="fw">
                    <b>{product.title}</b>
                    <b>$ {product.price}</b>
                  </div>
                  <div className="fw">
                    <p>{product.description}</p>
                  </div>
                </NavLink>
                </div>
              </>
            ))
          : null}
      </div>
      <div>Page Numbers</div>
      <div>
        {product.length !== 0
          ? product
              .slice(0, product.length / limitOfPagination)
              .map((product, i) => <button key={i} onClick={()=>{
                setStart(i*(limitOfPagination))
                setEnd(i*(limitOfPagination) + limitOfPagination)
              }}>{i + 1}</button>)
          : null}
      </div>
    </>
  );
}

export default App;
