import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function TodoItem(props) {
  const [updatedTitle, setUpdatedTitle] = useState(props.title);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [isEditTag, setIsEditTag] = useState(true);

  const navigate = useNavigate();

  const updataData = async () => {
    try {
      // validate updated todo
      if (!updatedTitle) {
        alert("todo can't be empty");
      }
      // send update req to server
      const res = await axios.patch(`/todos`, {
        todoId: props.todoId,
        title: updatedTitle,
      });
      // update title here itself without calling backend
      setUpdatedTitle(res.data.data.todo.title);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async () => {
    try {
      await axios.delete("/todos", {data:{ todoId: props.todoId }});
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
    props.onDeleteTodo(props.todoId)
  };


  return (
    <div>
      <input
        type="text"
        id="title"
        name="title"
        value={updatedTitle}
        disabled={inputDisabled}
        // onFocus={focusHandler}
        onBlur={blurHandler}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button onClick={editHandler}>{isEditTag?'edit':'update'}</button>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={()=>navigate(`/todos/${props.todoId}`)}>Add Tasks</button>
    </div>
  );
}

export default TodoItem;
