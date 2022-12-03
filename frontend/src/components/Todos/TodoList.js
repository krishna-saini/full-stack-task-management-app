import { useState } from "react";
import TodoItem from "./TodoItem";


function TodoList(props) {
  const [todos, setTodos] = useState(props.todos);
  // console.log(todos);
  
  const deleteTodoHandler = (deletedId) => {
    setTodos(todos.filter((todo) => todo._id !== deletedId));
  };
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todoId={todo._id}
          title={todo.title}
          onDeleteTodo={deleteTodoHandler}
        />
      ))}
    </ul>
  );
}

export default TodoList;
