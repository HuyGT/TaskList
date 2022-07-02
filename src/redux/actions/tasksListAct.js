import { TASKS_TYPE } from "../../constants/taskListType";

export const actGetAllTasks = () => ({
  type: TASKS_TYPE.GET_ALL_TASKS,
});
export const actAddNewTask = (payload) => {
  return {
    type: TASKS_TYPE.ADD_NEW_TASK,
    payload: payload,
  };
};
export const actGetTaskById = (id) => {
  return {
    type: TASKS_TYPE.GET_TASK_BY_ID,
    payload: id,
  };
};
export const actEditTask = (payload) => {
  return {
    type: TASKS_TYPE.EDIT_TASK,
    payload: payload,
  };
};
export const actDeleteTask = (id) => {
  return {
    type: TASKS_TYPE.DELETE_TASK,
    payload: id,
  };
};

export const actSetPage = (payload) => {
  return {
    type: TASKS_TYPE.SET_CURRENT_PAGE,
    payload: payload,
  };
};
