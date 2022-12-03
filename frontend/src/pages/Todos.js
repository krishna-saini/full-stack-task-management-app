import CreateTodo from "../components/Todos/CreateTodo";
import SearchTodo from "../components/Todos/SearchTodo";
import TodoList from "../components/Todos/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";
import { account } from "../config/appwriteConfig";
import Header from "../components/UI/Header";
import { useNavigate } from "react-router-dom";

function Todos() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [userDetails, setuserDetails] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // validating user
  // validate user as soon as page load
  useEffect(() => {
    const getData = account.get();
    getData
      .then(function (response) {
        setuserDetails(response);
        console.log(response);
        setIsLoggedIn(true)
      })
      .catch((err) => {
        console.log(err);
        navigate('/login')
      });
  }, [navigate]);

  

  const fetchTodoData = async (searchedString = "") => {
    try {
      // get all todos
      const res = await axios.get("/todos");
      // console.log(res.data);
      const data = res.data.data.todo;
      if (data.length > 0) {
        if (!searchedString) {
          setTodos(data);
        } else {
          setTodos(data.filter((el) => el.title === searchedString));
        }
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
    setLoadingData(true);
  };

  const searchTodoHandler = (searchedString) => {
    fetchTodoData(searchedString);
    setLoadingData(true);
  };
  return (
    <div>
      <Header isLoggedIn/>
      <CreateTodo onCreateTodo={createTodoHandler} />
      <SearchTodo onSearchTodo={searchTodoHandler} />
      {!loadingData && <TodoList todos={todos} />}
    </div>
  );
}

export default Todos;
