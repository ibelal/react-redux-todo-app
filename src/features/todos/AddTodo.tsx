import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title) {
      dispatch(
        addTodo({
          id: Date.now().toString(),
          completed: false,
          title,
        })
      );
      setTitle("");
    } else {
      ref.current && ref.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      setTitle(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="mb-3">
        <label htmlFor="addTodo" className="form-label">
          Add Todo
        </label>

        <input
          ref={ref}
          id="addTodo"
          type="text"
          name="todoName"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary">Add Todo</button>
    </form>
  );
};
