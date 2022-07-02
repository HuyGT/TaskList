export const routes = {
  all_task: {
    path: "/all-task",
    exact: true,
  },
  new_task: {
    path: "/new-task",
    exact: true,
  },
  doing_task: {
    path: "/doing-task",
    exact: true,
  },
  done_task: {
    path: "/done-task",
    exact: true,
  },
  create_task: {
    path: "/create-task",
    exact: true,
  },
  edit_task: {
    path: "/edit-task/:id",
    exact: true,
    name: "Edit Task",
  },
  search_task: {
    path: "/search-task/:value",
    exact: true,
    name: "Search Task",
  },
};

export const TASK_STATUS = {
  NEW: "NEW",
  DOING: "DOING",
  DONE: "DONE",
};

export const INITIAL_VALUES = {
  id: "",
  title: "",
  creator: "",
  createAt: "",
  description: "",
  status: TASK_STATUS.NEW,
};
