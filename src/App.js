import "./App.css";
import Addtask from "./Component/Add_task";
import ListTask from "./Component/ListTask";


function App() {
  return (
    <div className="App">
      <Addtask />

      <ListTask />
    </div>
  );
}

export default App;
