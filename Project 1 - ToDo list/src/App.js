import { createRoot } from "react-dom/client";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "first",
      status: false,
    },
  ]);

  // temp states

  const [newtask, setNewTask] = useState("");
  const [updatetask, setUpdateTask] = useState("");

  const handleAddToDo = () => {
    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        name: newtask,
        status: false,
      },
    ]);
    setNewTask("");
  };

  const handleUpdateTask = () => {
    const newToDoList = todo.map((todo) => {
      if (todo.id === updatetask.id) {
        return { ...todo, name: updatetask.name };
      }
      return todo;
    });
    setTodo(newToDoList);
    setUpdateTask("");
  };

  const setDone = (id) => {
    const newToDoList = todo.map((todo)=>{
      if(todo.id===id){
        return ({...todo,status:!todo.status})
      }
      return todo;
    })
    console.log(newToDoList);

    setTodo(newToDoList);
  };

  const setEdit = (id) => {
    const newToDoList = todo.filter((todo) => {
      if (todo.id === id) {
        setUpdateTask(todo);
      }
    });
  };

  const setDelete = (id) => {
    const newToDoList = todo.filter((todo) => {
      return todo.id !== id;
    });
    // console.log(newToDoList)
    setTodo(newToDoList);
  };

  return (
    <div className="container title">
      <p>ToDo List</p>

      {updatetask ? (
        <div className="container">
          <input
            type="text"
            value={updatetask && updatetask.name}
            onChange={(e) =>
              setUpdateTask((updatetask) => ({
                ...updatetask,
                name: e.target.value,
              }))
            }
            name="text-input"
            id="text-input"
          />
          <button onClick={handleUpdateTask}>Update Task</button>
        </div>
      ) : (
        <div className="container">
          <input
            type="text"
            value={newtask}
            onChange={(e) => setNewTask(e.target.value)}
            name="text-input"
            id="text-input"
          />
          <button onClick={handleAddToDo}>Add ToDO</button>
        </div>
      )}

      <div className="container">
        <ul>
          {todo.map((todo) => (
            <div>
              <li style={todo.status ? {"background-color" : 'green'} : {"background-color" : 'White'}} key={todo.id}>{todo.name}</li>
              <button onClick={() => setDone(todo.id)}>done</button>
              <button onClick={() => setEdit(todo.id)}>edit</button>
              <button onClick={() => setDelete(todo.id)}>delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
