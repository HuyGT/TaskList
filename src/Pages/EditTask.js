import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Form from "../components/Form";
import { routes } from "../constants";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  actDeleteTask,
  actEditTask,
  actGetTaskById,
} from "../redux/actions/tasksListAct";
import { yupResolver } from "@hookform/resolvers/yup";
import { addSchema } from "../components/Form/validate";
export default function EditTask() {
  const { id } = useParams();
  const taskDetail = useSelector((state) => state.tasks.taskDetail);
  const history = useHistory();
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      ...taskDetail,
    },
    resolver: yupResolver(addSchema),
  });
  dispatch(actGetTaskById(id));

  const handleEditTask = (values) => {
    const handleEdit = () => {
      dispatch(actEditTask(values));
      history.push(routes.all_task.path);
    };
    toast.success(" Edit thành công!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    window.setTimeout(handleEdit, 1000);
  };
  const handleDeleteTask = (values) => {
    const handleDelete = () => {
      dispatch(actDeleteTask(values.id));
      history.push(routes.all_task.path);
    };
    if (window.confirm("Bạn có muốn xóa task này không")) {
      toast.success("Xóa thành công", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.setTimeout(handleDelete, 1000);
    } else {
      toast.error("Xóa không thành công", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Form
        methods={methods}
        isEdit
        onValid={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}
