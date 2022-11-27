import Button from "../UI/Button";
import { useState } from "react";
import axios from "axios";

function CreateTodo(props) {
  // To Store the value from Frontend
  const [todo, setTodo] = useState("");

  // logic to send todo title data to server
  const postData = async () => {
    // validate input data
    if (todo.length === 0) {
      alert("todo cannot be empty");
    }
    // creat an object to send back to server
    const data = { title: todo };
    try {
      // send newly created todo to server
      await axios.post("/todos", data);
       // get the updated todo list in parent
       props.onCreateTodo()
    } catch (err) {
      console.log(err);
    }
  };

  // logic to handle things once form is submitted
  const submitHandler = async (e) => {
    e.preventDefault();
    // send the data to the backend server
    postData();
    // empty the input field
    setTodo("");
   
  
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          id="title"
          name="title"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button>Create a Todo</Button>
      </form>
    </div>
  );
}

export default CreateTodo;
