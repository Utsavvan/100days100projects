import { useContext } from "react";
import AppContext from "../../utils/Context/AppContext";

import Product from "./Product";

const ProductList = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="container ">
      <div className="row card-deck">
        {products.length !== 0 &&
          products.map((product) => <Product products={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
