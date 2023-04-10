import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="body">
      <div className="container">
        <h1>Todo</h1>
        <div className="content">
          <div className="list">
            {todos.map((el) => (
              <div className="todo">
                <p>{el.title}</p>
                <img src="https://www.pokladnysoftware.cz/wp-content/uploads/2021/03/success-green-check-mark-350x350.png" />{" "}
              </div>
            ))}
          </div>
          <AddTask />
        </div>
      </div>
    </div>
  );
}

export default App;
