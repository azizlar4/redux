import { ADD, DELETE, DONE, EDIT } from "./actionType";

export const add_task = (new_task) => {
  return { type: ADD, payload: new_task };
};
export const delete_task = (id) => {
  return { type: DELETE, payload: id };
};
export const edit_task = (new_task,id) => {
  return { type: EDIT, payload: {new_task,id }};
};

export const done_task = (id) => {
  return { type: DONE, payload: id };
};
