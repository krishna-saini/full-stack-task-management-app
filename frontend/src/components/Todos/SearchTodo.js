import Button from "../UI/Button";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function SearchTodo(props) {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const queryParams = new URLSearchParams(location.search);
  console.log("query", queryParams);
  // To Store the search query value from Frontend
  const [searchString, setSearchString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()

  const submitHandler = (e) => {
    e.preventDefault();
    // validate query string
    if (searchString) {
      // navigate({
      //   search: `?title=${searchString}`,
      // });
      // or
      // navigate(`/todos?q=${searchString}`);
      // or 
      // The setSearchParams function works like navigate, but only for the search portion of the URL.
      setSearchParams(`q=${searchString}`);
    }
    // send searched string to parent
    props.onSearchTodo();
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          id="q"
          name="q"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <Button>Search a Todo</Button>
      </form>
    </div>
  );
}

export default SearchTodo;
