import { useReducer } from "react";
import { createRoot } from "react-dom/client";

interface Props {}

const App: React.FC<Props> = () => {
  interface IAppState {
    toDoList: any[];
    todoText: string;
    updateText: string;
    updateIndex: any;
  }

  function todoReducer(state: IAppState, action: Object) {
    const updatedState = { ...state, ...action };

    if (action.type === "change") {
      updatedState.todoText = action.payload;
    }

    if (action.type === "add") {
      updatedState.toDoList.push(action.payload);
    }

    if (action.type === "remove") {
      let indexOfList = updatedState.toDoList.indexOf(action.payload);
      updatedState.toDoList.splice(indexOfList, 1);
    }

    if (action.type === "update") {
      updatedState.toDoList[updatedState.updateIndex] = action.payload;
      updatedState.updateText = "";
      updatedState.updateIndex = "";
    }

    if (action.type === "setupdate") {
      updatedState.updateText = action.payload;
    }

    return updatedState;
  }

  const todoInitialArgs: IAppState = {
    toDoList: [],
    todoText: "",
    updateText: "",
    updateIndex: "",
  };

  const [todos, setTodos] = useReducer(todoReducer, todoInitialArgs);

  function onAddHandler() {
    if (todos.updateText.length === 0) {
      setTodos({ type: "add", payload: todos.todoText });
    } else {
      setTodos({ type: "update", payload: todos.updateText });
    }
  }

  function onValueChange(e) {
    if (todos.updateText.length === 0) {
      setTodos({ type: "change", payload: e.target.value });
    } else {
      setTodos({ type: "setupdate", payload: e.target.value });
    }
  }

  function onDeleteHandler(todo) {
    setTodos({ type: "remove", payload: todo });
  }

  function onUpdateHandler(todo) {
    let indexOfList = todos.toDoList.indexOf(todo);
    setTodos({ updateIndex: indexOfList, updateText: todo });
  }

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={
            todos.updateText.length === 0 ? todos.todoText : todos.updateText
          }
          onChange={(e) => onValueChange(e)}
        />
        {todos.updateText.length === 0 ? (
          <button onClick={onAddHandler}>Add To DO</button>
        ) : (
          <button onClick={onAddHandler}>Update</button>
        )}
      </div>
      <div className="list">
        <ul>
          {todos.toDoList.map((todo, i) => (
            <li>
              {todo}
              <span
                onClick={() => {
                  onUpdateHandler(todo);
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
              <span
                onClick={() => {
                  onDeleteHandler(todo);
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
