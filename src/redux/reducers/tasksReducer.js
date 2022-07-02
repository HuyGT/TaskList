import { TASK_STATUS } from "../../constants";
import { TASKS_TYPE } from "../../constants/taskListType";
import { initArray } from "./init";
const initialState = {
  tasksList: initArray,
  taskDetail: {},
  pagination: {
    currentPage: 1,
		size: 12,
  }
};

export const taskListReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case TASKS_TYPE.GET_ALL_TASKS:
      return { ...state };
    case TASKS_TYPE.GET_TASK_BY_ID:
      const id = action.payload;
      const taskDetail = state.tasksList.find(
        (task) => task?.id === parseInt(id)
      );
      return { ...state, taskDetail: taskDetail };

    case TASKS_TYPE.ADD_NEW_TASK:
      const newTask = {
        ...action.payload,
        id: new Date().getTime(),
        status: TASK_STATUS.NEW,
      };
      const tasks = [...state.tasksList, newTask];
      return {
        ...state,
        tasksList: tasks,
      };
    case TASKS_TYPE.DELETE_TASK:
      return {
        ...state,
        tasksList: [
          ...state.tasksList.filter(
            (task) => task.id !== parseInt(action.payload)
          ),
        ],
      };
    case TASKS_TYPE.EDIT_TASK:
      const editId = state.tasksList.findIndex(
        (task) => task.id === parseInt(payload.id)
      );
      state.tasksList[editId] = payload;
      return {
        ...state,
      };
    case TASKS_TYPE.SET_CURRENT_PAGE:
      return {
        ...state, pagination: {
          currentPage: payload,
          size: 12
        }
      };
    default:
      return state;
  }
};
