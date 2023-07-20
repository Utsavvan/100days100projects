import { createRoot } from "react-dom/client";
import { useReducer } from "react";

import "./App.css";

const App = () => {
  const winningPatters = [];

  function gameReducer(state, action) {
    const updateState = { ...state, ...action };

    if (updateState.action.type === "add") {
      updateState.boxArr[updateState.action.payload.row][
        updateState.action.payload.col
      ] = updateState.action.payload.value;
    }

    if (updateState.action.type === "turnchange") {
      if (updateState.Turn === "Human") {
        updateState.Turn = "Computer";
      } else {
        updateState.Turn = "Human";
      }
    }

    if (updateState.action.type === "checkWinner") {
      const size = updateState.boxArr.length;

      // Row and Column check
      for (let i = 0; i < size; i++) {
        const row = updateState.boxArr[i];
        const column = updateState.boxArr.map((row) => row[i]);

        if (row.every((value) => value && value === row[0])) {
          updateState.Winner = updateState.Turn;
          // Row winner
        }

        if (column.every((value) => value && value === column[0])) {
          updateState.Winner = updateState.Turn;
          // Column winner
        }
      }

      // Diagonal check
      const diagonal = updateState.boxArr.map((row, i) => row[i]);
      if (diagonal.every((value) => value && value === diagonal[0])) {
        updateState.Winner = updateState.Turn;
        // Diagonal winner
      }

      // Anti-diagonal check
      const antiDiagonal = updateState.boxArr.map(
        (row, i) => row[size - i - 1]
      );
      if (antiDiagonal.every((value) => value && value === antiDiagonal[0])) {
        updateState.Winner = updateState.Turn;

        // Anti-diagonal winner
      }
    }

    return updateState;
  }

  const gameInitialArgs = {
    boxArr: Array.from({ length: 3 }, () => Array.from({ length: 3 })),
    Players: [
      {
        id: "Human",
        value: "X",
      },
      { id: "Computer", value: "O" },
    ],
    Turn: "Human",
    Winner: "",
  };

  const [boxValues, setBoxValues] = useReducer(gameReducer, gameInitialArgs);

  function boxClickHandler(row, col) {
    if (!boxValues.Winner) {
      let CurValue = boxValues.Players.find(
        (player) => player.id === boxValues.Turn
      ).value;

      setBoxValues({
        action: {
          type: "add",
          payload: {
            row,
            col,
            value: CurValue,
          },
        },
      });

      setBoxValues({ action: { type: "checkWinner" } });

      setBoxValues({ action: { type: "turnchange" } });
    }
  }

  return (
    <>
      <div className="container">
        <p>{boxValues.Winner && boxValues.Winner + " is a winner"}</p>
        <div className="game-boxs flex wrap">
          {boxValues.boxArr.map((row, rowIindex) => {
            return row.map((col, colIndex) => {
              return (
                <div
                  className="game-box"
                  onClick={() => boxClickHandler(rowIindex, colIndex)}
                >
                  {boxValues.boxArr[rowIindex][colIndex]}
                </div>
              );
            });
          })}
        </div>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
