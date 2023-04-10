import { useDispatch, useSelector } from "react-redux";
import AddTask from "./AddTask";
import "./App.css";
import { deleteTodo, updateIsDone } from "./store/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <h1>Todo</h1>
        <div className="content">
          <div className="list">
            {todos.length > 0 ? (
              todos.map((el) => (
                <div className="todo">
                  <div className="title">
                    <button onClick={() => dispatch(deleteTodo(el.id))}>
                      X
                    </button>
                    <p
                      onClick={() => dispatch(updateIsDone(el.id))}
                      className={el.isDone ? "done" : ""}
                    >
                      {el.title}
                    </p>
                  </div>
                  {el.isDone && (
                    <img src="https://www.pokladnysoftware.cz/wp-content/uploads/2021/03/success-green-check-mark-350x350.png" />
                  )}
                </div>
              ))
            ) : (
              <h1>There are NO Todos</h1>
            )}
          </div>
          <AddTask />
        </div>
      </div>
    </div>
  );
}

export default App;
