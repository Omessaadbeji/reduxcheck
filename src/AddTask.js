import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "./store/todoSlice";

export default function () {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState({
    id: Math.random(),
    title: "",
    description: "",
    isDone: "false",
  });
  const dispatch = useDispatch();
  return (
    <div className="add">
      <input
        type="text"
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <div className="space">
        {show && (
          <button onClick={() => dispatch(AddTodo(todo))}>
            <img src="https://assets.dryicons.com/uploads/icon/preview/733/icon_grid_2x_add.png" />
          </button>
        )}
      </div>
    </div>
  );
}
