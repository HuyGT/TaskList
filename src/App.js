import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import AllTask from "./Pages/AllTask";
import NewTask from "./Pages/NewTask";
import DoingTask from "./Pages/DoingTask";
import DoneTask from "./Pages/DoneTask";
import CreateTask from "./Pages/CreateNewTask";

import SideBar from "./components/SideBar";
import { routes } from "./constants";
import EditTask from "./Pages/EditTask";
import SearchTask from "./Pages/SearchTask";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <SideBar />
          <Switch>
            <Route path={routes.all_task.path} component={AllTask} />
            <Route path={routes.new_task.path} component={NewTask} />
            <Route path={routes.doing_task.path} component={DoingTask} />
            <Route path={routes.done_task.path} component={DoneTask} />
            <Route path={routes.create_task.path} component={CreateTask} />
            <Route path={routes.edit_task.path} component={EditTask} />
            <Route path={routes.search_task.path} component={SearchTask} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
