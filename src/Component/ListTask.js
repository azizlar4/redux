import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import TaskCard from "./TaskCard";

const ListTask = () => {
  const list = useSelector((state) => state.toDoReducer.tasks);
  const [status, setStatus] = useState("all");
  return (
    <div>
      <div style={{margin:"20px"}}>
        <Button onClick={() => setStatus("done")}>done</Button>
        <Button onClick={() => setStatus("all")}>ALL</Button>
        <Button onClick={() => setStatus("notdone")}>notdone</Button>
      </div>

      {status === "all"
        ? list.map((el) => <TaskCard task={el} />)
        : status === "done"
        ? list.map((el) => (el.isDone ? <TaskCard task={el} /> : <></>))
        : list.map((el) => (!el.isDone ? <TaskCard task={el} /> : <></>))}
    </div>
  );
};

export default ListTask;
