import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../app/store";

import { selectTodos, toggleTodo, deleteTodo } from "./todosSlice";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useTypedSelector(selectTodos);

  return (
    <ul className="list-group mt-4">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item">
          <div className="row">
            <div className="col-sm-8">
              <input
                id={`list-item-${todo.id}`}
                className="form-check-input"
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <label
                className={`form-check-label px-3 ${
                  todo.completed && "text-decoration-line-through"
                }`}
                htmlFor={`list-item-${todo.id}`}
              >
                {todo.title}
              </label>
            </div>
            <div className="col">
              <div className="row">
                <div className="col px-0">
                  {todo.completed && (
                    <span className="badge bg-success">Completed</span>
                  )}
                </div>
                <div className="col close-btn">
                  <span
                    className="badge bg-secondary pe-auto"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    x
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
