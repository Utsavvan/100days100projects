import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import { emojiList } from "./utils/emojiList";

import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");

  const [filteredEmojiList, setFilteredEmojiList] = useState([]);

  const [copyText, setCopyText] = useState(false);

  useEffect(() => {
    handleSearch();
  }, [search]);

  function handleSearch(e) {
    const data = emojiList.filter((emojiData) => {
      emojiTitle = emojiData.title.toLowerCase();
      return emojiTitle.includes(search);
    });
    setFilteredEmojiList(data);
  }

  function copyEmojiHandler(symbol) {
    navigator.clipboard.writeText(symbol);
    setCopyText(true);
    setTimeout(() => {
      setCopyText(false);
    }, 1000);
  }

  return (
    <>
      <div className="cont">
        <div className="title flex-cen">
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
            alt=""
            width="32"
            height="32"
          />
          <h1> Emoji Search </h1>
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
            alt=""
            width="32"
            height="32"
          />
        </div>
        <div className="search flex-cen">
          <input
            className="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Emojis.."
          />
        </div>
        <div className="emoji-list flex-cen">
          <ul>
            {filteredEmojiList.slice(0, 20).map(({ symbol, title }) => (
              <li
                key={title}
                onClick={() => {
                  copyEmojiHandler(symbol);
                }}
              >
                <p className="emoji">{symbol}</p>
                <p className="title">{title}</p>
                <span className="copytext">{copyText ? "Copied" : "click to copy"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
