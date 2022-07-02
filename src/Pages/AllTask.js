import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination";
import Task from "../components/Task";
import { actGetAllTasks, actSetPage } from "../redux/actions/tasksListAct";
import "./style.scss";
export default function AllTask() {
  const tasksList = useSelector((state) => state?.tasks?.tasksList);
  const pagination = useSelector((state) => state?.tasks?.pagination);
  const dispatch = useDispatch();
  const startIndex = pagination.currentPage * pagination.size - pagination.size;
  const tasksListPage = [
    ...tasksList.slice(startIndex, startIndex + pagination.size),
  ];

  useEffect(() => {
    dispatch(actGetAllTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSetCurrentPage = (page) => {
    dispatch(actSetPage(page));
  };
  return (
    <>
      <div className="main-task">
        <div className="list-task">
          {!!tasksListPage.length &&
            tasksListPage.map((item, index) => {
              return <Task key={index} task={item} />;
            })}
        </div>
        <Pagination
          currentPage={pagination.currentPage}
          tasksList={tasksList}
          limit={pagination.size}
          handleSetCurrentPage={handleSetCurrentPage}
        />
      </div>
    </>
  );
}
