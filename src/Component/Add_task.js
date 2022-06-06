import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_task } from "../JS/action";

function Add_task() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    text?dispatch(add_task({ desc: text, id: Math.random(), isDone: false })):alert("write a task !!")
    setText("");
  };

  return (
    <div style={{marginTop:"20px"}}>
      <input
        type="text"
        placeholder="enter new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default Add_task;
