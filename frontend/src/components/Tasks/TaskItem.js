import { useState } from "react";
import  axios from 'axios';

function TaskItem(props) {
    console.log(props);
  const [updatedTask, setUpdatedTask] = useState(props.task);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [isEditTag, setIsEditTag] = useState(true);

  const updataData = async () => {
    try {
      // validate updated todo
      if (!updatedTask) {
        alert("task can't be empty");
      }
      // send update req to server
      const res = await axios.patch(`/todos/${props.todoId}`, {
        taskKey:props.taskKey,
        updatedTask: updatedTask,
      });
      // update title here itself without calling backend
      setUpdatedTask(res.data.data.todo.task[props.taskKey]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async () => {
    try {
      await axios.delete("/todos", { data: { todoId: props.todoId } });
    } catch (err) {
      console.log(err);
    }
  };

  const blurHandler = (e) => {
    setInputDisabled(true);
    // send update request to server
    updataData();
    setIsEditTag(!isEditTag);
  };

  const editHandler = () => {
    // make input editable
    setInputDisabled(!inputDisabled);
    setIsEditTag(!isEditTag);
  };

  const deleteHandler = () => {
    // send request to server to delete data
    deleteData();
    // update the todo list
    props.onDeleteTask(props.taskKey);
  };
  return (
    <div>
      {" "}
      <input
        type="text"
        id="title"
        name="title"
        value={updatedTask}
        disabled={inputDisabled}
        // onFocus={focusHandler}
        onBlur={blurHandler}
        onChange={(e) => setUpdatedTask(e.target.value)}
      />
      <button onClick={editHandler}>{isEditTag ? "edit" : "update"}</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default TaskItem;
