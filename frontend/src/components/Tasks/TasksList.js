import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  console.log(props.todo);
  const [tasks, setTasks] = useState(props.todo.tasks);

  const deleteHandler = (deletedId) => {
    setTasks(tasks.filter((task, index) => index !== deletedId));
  };
  return (
    <ul>
      {tasks.lenght !== 0 &&
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            taskKey={index}
            todoId={props.todo._id}
            task={task}
            onDeleteTask={deleteHandler}
          />
        ))}
    </ul>
  );
}

export default TaskList;
