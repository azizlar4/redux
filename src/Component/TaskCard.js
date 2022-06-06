import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { delete_task, done_task } from "../JS/action";
import Edit from "./Edit";


const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div style={{display:"flex",justifyContent:"space-between",marginLeft:"250px",marginRight:"250px",marginTop:"10px"}}>
      <h1>{task.desc}</h1>
      <div style ={{display :"flex"}}> <Button onClick={()=>{dispatch(delete_task(task.id))}}>deletee</Button>
      <Button  onClick={()=>{dispatch(done_task(task.id))}}>{task.isDone? "Done" :"undone"}</Button>
       <Edit  id={task.id} />
      </div>
     
      
    </div>
  );
};

export default Task;
