import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import "./App.css";

import { shoppingList } from "./utils/data.js";

const App = () => {
  const [listData, setListData] = useState(shoppingList);

  const [filteredData, setFilteredData] = useState([]);

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  const categories = [
    ...new Set(
      listData.map((list) => {
        return list.category;
      })
    ),
    "All",
  ];

  useEffect(() => {
    setFilteredData(listData);
  }, [listData]);

  function handleCategoryFilter(category) {
    if (category === "All") {
      return setFilteredData(listData);
    }
    const updatedData = listData.filter((items) => {
      return items.category === category;
    });
    setFilteredData(updatedData);
  }

  function handleInsert() {
    setListData((prevData) => [
      ...prevData,
      {
        id: listData.length + 1,
        itemName: itemName,
        category: itemCategory,
        imageUrl: "",
      },
    ]);
  }

  function handleCheckChange(e) {
    const itemid = e.target.getAttribute("data-itemsid");
    const updateData = listData.map((items) => {
      if (items.id == itemid) {
        return { ...items, checked: e.target.checked ? true : false };
      }
      return items;
    });
    setListData(updateData);
  }

  return (
    <>
      <div className="container">
        <div className="serach-container">
          <label htmlFor="name">Item name</label>
          <input
            type="text"
            name="name"
            id=""
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <label htmlFor="name">Item category</label>
          <input
            type="text"
            name="category"
            id=""
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          />
          <button onClick={handleInsert}>Add a new items</button>
        </div>
        <section className="center-content flex">
          <div className="list-items flex">
            {filteredData.map((item) => (
              <div className="item">
                <label htmlFor={item.itemName}>
                  {!item.checked ? item.itemName : <del>{item.itemName}</del>}
                </label>
                <input
                  type="checkbox"
                  name={item.itemName}
                  data-itemsid={item.id}
                  id=""
                  checked={item.checked ? 'checked' : undefined}
                  onChange={handleCheckChange}
                />
                <img src="" alt="" />
                <button>Add Photo</button>
              </div>
            ))}
          </div>
          <div className="categories flex">
            {categories.map((category) => (
              <button onClick={() => handleCategoryFilter(category)}>
                {category}
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
