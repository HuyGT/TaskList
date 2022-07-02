import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { routes } from "../../constants";
import "./style.scss";
export default function Task({ task }) {
  const history = useHistory();
  const handleRedirectToEdit = (id) => {
    history.push(
      generatePath(routes.edit_task.path, {
        id: id,
      })
    );
  };
  return (
    <div className="card" onClick={() => handleRedirectToEdit(task.id)}>
      <ul>
        <li>
          <b>Title: {task.title}</b>
        </li>
        <li>Creator: {task.creator}</li>
        <li
          style={{
            color:
              task.status === "NEW"
                ? "#2ecc71"
                : task.status === "DOING"
                ? "#e67e22"
                : "#2980b9",
          }}
        >
          Status: {task.status}
        </li>
        <hr className="hr-style" />
        <li>Description: {task.description}</li>
      </ul>
    </div>
  );
}
