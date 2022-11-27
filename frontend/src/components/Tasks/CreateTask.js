import Button from "../UI/Button";
import { useState } from "react";
import axios from "axios";

function CreateTask(props) {
  // To Store the value from Frontend
  const [input, setInput] = useState("");

  // logic to send todo title data to server
  const postData = async () => {
    // validate input data
    if (input.length === 0) {
      alert(" cannot be empty");
    }
    
    try {
      // send newly created data to server
      await axios.post(`/todos/${props.todoId}`, {task:input});
       // get the updated d list in parent
       props.onCreate();
    } catch (err) {
      console.log(err);
    }
  };

  // logic to handle things once form is submitted
  const submitHandler = async (e) => {
    e.preventDefault();
    // send the data to the backend server
    console.log(input);
    postData();
    // empty the input field
    setInput("");
   
  
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          id="title"
          name="title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button>Create a Todo</Button>
      </form>
    </div>
  );
}

export default CreateTask;
