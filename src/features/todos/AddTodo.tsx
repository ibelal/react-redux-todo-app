import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [created, setCreated] = useState<Date | null>(new Date());

  const titleRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && created) {
      dispatch(
        addTodo({
          id: Date.now().toString(),
          completed: false,
          title,
          created: created?.toDateString()!,
        })
      );
      setTitle("");
      setCreated(new Date());
    } else {
      !title && titleRef.current && titleRef.current.focus();
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
          ref={titleRef}
          id="addTodo"
          type="text"
          name="todoName"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="created" className="form-label">
          Create Date
        </label>
        <DatePicker
          id="created"
          className="form-control"
          selected={created}
          onChange={(date: Date) => setCreated(date)}
        />
      </div>
      <button className="btn btn-primary">Add Todo</button>
    </form>
  );
};
