import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { edit_task } from "../JS/action";
function Edit({ id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const handleEdit = () => {
    dispatch(edit_task(newTask, id));
    setOpen(false);
    setNewTask("");
  };
  return (
    <div>
      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>EDIT</Button>}
      >
        <Modal.Header>Edit task number {id}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <input
              placeholder="enter your edits"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            ></input>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Edit"
            labelPosition="right"
            icon="checkmark"
            onClick={handleEdit}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Edit;
