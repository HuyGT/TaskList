import { combineReducers } from "redux";
import { taskListReducer } from "./tasksReducer";

const appReducers = combineReducers({
  tasks: taskListReducer,
});

export default appReducers;
