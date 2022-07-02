import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actGetAllTasks } from "../redux/actions/tasksListAct";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import Task from "../components/Task";
export default function SearchTask() {
  const { value } = useParams();
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
              return item.title.includes(value) ? (
                <Task key={item.id} task={item} />
              ) : (
                item.creator.includes(value) && (
                  <Task key={item.id} task={item} />
                )
              );
            })}
        </div>
      </div>
    </div>
  );
}
