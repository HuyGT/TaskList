import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../components/Task";
import { TASK_STATUS } from "../constants";
import { actGetAllTasks } from "../redux/actions/tasksListAct";
import "./style.scss";

export default function DoneTask() {
  const tasksList = useSelector((state) => state?.tasks?.tasksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetAllTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="main-task">
        <div className="list-task">
          {!!tasksList.length &&
            tasksList.map((item) => {
              return (
                item.status === TASK_STATUS.DONE && (
                  <Task key={item.id} task={item} />
                )
              );
            })}
        </div>
      </div>
    </div>
  );
}
