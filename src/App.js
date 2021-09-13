import react, {useState} from "react";

import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todoList, setTodoList] = useState([])
  const [isEditMode, setIsEditMode] = useState(false)
  const [todo, setTodo] = useState('')
  const addNewTodo = (e) => {
    e.preventDefault()
    if(todo){
      setTodoList(todoList => {
        return [...todoList, todo]
      })
      setTodo('')
    }
    setIsEditMode(false)
  }

  // delete a single todo by name
  const deleteTodo = (todo) => {
    const newTodos = todoList.filter(myTodo => {
      return myTodo !== todo
    })
    setTodoList(newTodos)
  }

  // edit a todo by name
  const editTodo = (item) => {
    setIsEditMode(true)
    setTodo(item)
    const updatedTodos = todoList.filter(myItem => {
      return myItem !== item
    })
    setTodoList(updatedTodos)
  }
  return (
    <div className="container">
      <div className="header">
        <h1>React Todo List App</h1>
      </div>
      <div className="main-content">
        <div className="input-fields">
          <form action="" onSubmit={addNewTodo}>
            <input type="text" placeholder="Todo Name" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit" >{isEditMode?'Update':'Add'}</button>
          </form>
        </div>
        <div className="todo-list">
          {todoList.map(todo => {
            return(
              <Todo todo={todo} editTodo={editTodo} deleteTodo={deleteTodo}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
