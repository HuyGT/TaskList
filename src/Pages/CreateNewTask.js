import format from "date-fns/format";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Form from "../components/Form";
import { INITIAL_VALUES, routes } from "../constants";
import { actAddNewTask } from "../redux/actions/tasksListAct";
import { yupResolver } from "@hookform/resolvers/yup";
import { addSchema } from "../components/Form/validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CreateNewTask() {
  const dispatch = useDispatch();
  const history = useHistory();
  const methods = useForm({
    defaultValues: {
      ...INITIAL_VALUES,
      createAt: format(new Date(), "yyyy/MM/dd HH:mm"),
    },
    resolver: yupResolver(addSchema),
  });
  const onValid = (values, e) => {
    e.preventDefault();
    toast.success("Thêm thành công", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const handleSave = () => {
      dispatch(actAddNewTask(values));
      history.push(routes.all_task.path);
    };
    window.setTimeout(handleSave, 1000);
  };
  return (
    <>
      <Form methods={methods} onValid={onValid} />
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
