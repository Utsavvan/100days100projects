const productApi = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=50");
  const data = await response.json();
  return data;
};

const singleProductApi = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

export { productApi, singleProductApi };
