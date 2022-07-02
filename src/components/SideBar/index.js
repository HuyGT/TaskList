import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { routes } from "../../constants";

export default function SideBar() {
  return (
    <main>
      <div className="sidebar">
        <ul>
          <li>
            <Link className="link-style" to={routes.all_task.path}>All Task</Link>
          </li>
          <li>
            <Link className="link-style" to={routes.new_task.path}>New Task</Link>
          </li>
          <li>
            <Link className="link-style" to={routes.doing_task.path}>Doing Task</Link>
          </li>
          <li>
            <Link className="link-style" to={routes.done_task.path}>Done Task</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
