import { TodoList } from "./features/todos/TodoList";
import { AddTodo } from "./features/todos/AddTodo";

function App() {
  return (
    <div className="container-fluid">
      <div className="row align-items-start">
        <div className="col">
          <AddTodo />
          <TodoList />
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
