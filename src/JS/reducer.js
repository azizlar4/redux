import { ADD, DELETE, DONE, EDIT } from "./actionType";

const initstate = {
  tasks: [
    { id: Math.random(), desc: "Task 1", isDone: true },
    { id: Math.random(), desc: "Task 2", isDone: false },
  ]
};
export const toDoReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
    case EDIT:
      return { ...state, tasks:state.tasks.map((el) => el.id ===payload.id?{...el,desc:payload.new_task}:el) };
    case DONE:
      return { ...state, tasks: state.tasks.map((el) => el.id === payload?{...el,isDone:!el.isDone}:el) };

    default:
      return state;
  }
};
