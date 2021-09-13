import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import "./Todo.css";

const Todo = (props) => {
  const {todo, deleteTodo, editTodo} = props
  return (
    <div className="todo-box">
      <div className="todo">
        <input type="checkbox" id={todo} />
        <label htmlFor={todo}>{todo}</label>
      </div>
      <AiFillDelete className="icon" onClick={() => deleteTodo(todo)}/>
      <FiEdit className="icon" onClick={() => editTodo(todo)}/>

    </div>
  );
};

export default Todo;
