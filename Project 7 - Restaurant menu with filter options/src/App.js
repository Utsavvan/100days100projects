import { useState } from "react";
import { createRoot } from "react-dom/client";

import ItemCard from "./components/ItemCard/ItemCard";
import FilterButton from "./components/FilterButton/FilterButton";

import MenuData from "./utils/MenuData";

const Categories = [
  ...new Set(MenuData.map((menuItems) => menuItems.category)),
  "All",
];

const App = () => {
  const [menuItems, setMenuItems] = useState(MenuData);

  const filterButton = (category) => {
    if (category === "All") {
      setMenuItems(MenuData)
      return;
    }
    let items = MenuData.filter((items) => {
      return items.category === category;
    });
    setMenuItems(items);
  };

  return (
    <div className="container">
      <div className="buttons text-center">
        {Categories.map((category) => (
          <FilterButton Categories={category} filterButton={filterButton} />
        ))}
      </div>
      <div className="d-flex flex-wrap">
        {menuItems.map((menuItem) => (
          <ItemCard menuItem={menuItem} />
        ))}
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
