import CreateTodo from "../components/Todos/CreateTodo";
import SearchTodo from "../components/Todos/SearchTodo";
import TodoList from "../components/Todos/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  
  const fetchTodoData = async () => {
    try {
      // get all todos
      const res = await axios.get("/todos");
      console.log(res.data);
      if (res.data.data.todo.length > 0) {
        setTodos(res.data.data.todo);
        setLoadingData(false);
      }
    } catch (err) {
      console.log(err.message);
      setLoadingData(true);
    }
  };

  useEffect(() => {
    // when page loads, fetch todolist
    loadingData && fetchTodoData();
  }, [loadingData]);

  const createTodoHandler = () => {
    setLoadingData(true)
  };

  const searchTodoHandler = () => {
    console.log("searchig");
    setLoadingData(true)
  };
  return (
    <div>
      <CreateTodo onCreateTodo={createTodoHandler} />
      <SearchTodo onSearchTodo={searchTodoHandler} />
      {!loadingData && <TodoList todos={todos} />}
    </div>
  );
}

export default Todos;
