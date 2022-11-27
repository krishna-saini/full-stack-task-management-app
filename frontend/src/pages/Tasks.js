import TasksList from "../components/Tasks/TasksList";
import CreateTask from "../components/Tasks/CreateTask";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Tasks() {
  // 👇️ get todoID from url
  const params = useParams();

  const [todo, setTodo] = useState();
  const [loadingData, setLoadingData] = useState(true);

  // get matched todo as soon as page loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get all tasks
        const res = await axios.get(`/todos/${params.todoId}`);
        console.log(res.data.data.todo);
        setTodo(res.data.data.todo);
        setLoadingData(false);
      } catch (err) {
        console.log(err.message);
        setLoadingData(true);
      }
    };
    loadingData && fetchData();
  }, [loadingData, params.todoId]);

  const createHandler = () => {
    setLoadingData(true);
  };

  return (
    <div>
      {!loadingData && (
        <div>
          <h2>{todo.title}</h2>
          <CreateTask onCreate={createHandler} todoId={todo._id} />
          <TasksList todo={todo} />
        </div>
      )}
    </div>
  );
}

export default Tasks;
