import { Route, Routes , Navigate} from "react-router-dom";

import Todos from "../src/pages/Todos";
import Tasks from "../src/pages/Tasks";

function App() {
  return (
    <div>
      <Routes>
         {/* Redirecting to todos page  */}
         <Route path="/" element={<Navigate replace to="/todos" />} />
        <Route path="/todos" exact element={<Todos/>}/>
        <Route path="/todos/:todoId" element = {<Tasks/>}/>
      </Routes>
    </div>
  );
}

export default App;
