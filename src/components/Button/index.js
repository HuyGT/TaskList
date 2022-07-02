import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import "./style.scss";

export default function Button(props) {
  const { create, btn, content,type,onClick } = props;

  if (create) {
    return (
      <>
        <Link to={routes.create_task.path}>
          <button className="btn btn--create" type="button">
            Create New Task
          </button>
        </Link>
      </>
    );
  } else if (btn) {
    return <button className="btn btn--search" type={type} onClick={onClick}>{content}</button>;
  } 
}
