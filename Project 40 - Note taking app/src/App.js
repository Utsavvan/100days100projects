import { createRoot } from "react-dom/client";

import { useReducer } from "react";

const App = () => {
  const reducer = (state, actions) => {
    const newNoteData = { ...state, ...actions };

    if (newNoteData.type === "addNote") {
      newNoteData.noteInputes.push("value");
    }

    if (newNoteData.type === "deleteNote") {
      const newData = newNoteData.noteInputes.splice(newNoteData.deleteIndex,1);
      console.log("🚀 ~ file: App.js:28 ~ handleDelete ~ newData:", newData);
    //   setNoteData({ noteInputes: newData });
    }

    return newNoteData;
  };

  const initialArgs = {
    noteInputes: [],
  };

  const [noteData, setNoteData] = useReducer(reducer, initialArgs);

  function handleClick(e) {
    // e.preventDefault();
    setNoteData({ type: "addNote" });
  }

  function handleDelete(i) {
    setNoteData({ type: "deleteNote", deleteIndex: i });
  }

  console.log("render");

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Note taking app</h1>
        </div>
        <div className="notes">
          {noteData.noteInputes.map((data, i) => (
            <div
              className="input-message-card"
              onDoubleClick={() => handleDelete(i)}
            >
              <input type="text" />
            </div>
          ))}
        </div>
        <div className="plus-button">
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
