import React from "react";
import "./style.scss";
import Button from "../Button";
import { Controller } from "react-hook-form";
import { TASK_STATUS } from "../../constants";


export default function Form(props) {
  const { isEdit = false, methods, onValid, handleDeleteTask } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <div className="form-style">
      <form onSubmit={handleSubmit(onValid)}>
        <div className="form-group">
          <label>Title</label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <input
                style={
                  !!errors && !!errors.title
                    ? { borderBottom: "2px solid red" }
                    : { borderBottom: "2px solid black" }
                }
                type={"text"}
                id="title"
                placeholder="Name of title"
                {...field}
              />
            )}
          />
        </div>
        <div className="form-group">
          <label>Creator</label>
          <Controller
            name="creator"
            control={control}
            render={({ field }) => (
              <input
                style={
                  !!errors && !!errors.creator
                    ? { borderBottom: "2px solid red" }
                    : { borderBottom: "2px solid black" }
                }
                type={"text"}
                id="creator"
                placeholder="Name of creator"
                {...field}
              />
            )}
          />
        </div>
        <div className="form-group">
          <label>Created at</label>
          <Controller
            name="createAt"
            control={control}
            render={({ field }) => (
              <input
                style={
                  !!errors && !!errors.createAt
                    ? { borderBottom: "2px solid red" }
                    : { borderBottom: "2px solid black" }
                }
                type={"text"}
                id="createAt"
                disabled
                placeholder="Input create at"
                {...field}
              />
            )}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <input
                style={
                  !!errors && !!errors.description
                    ? { borderBottom: "2px solid red" }
                    : { borderBottom: "2px solid black" }
                }
                type={"text"}
                id="description"
                placeholder="Description details"
                {...field}
              />
            )}
          />
        </div>
        {!isEdit ? (
          <Button btn content="Save" type="submit" />
        ) : (
          <>
            <div className="form-radio">
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <input
                    type={"radio"}
                    id="new"
                    {...field}
                    value={TASK_STATUS.NEW}
                  />
                )}
              />
              <label style={{ marginLeft: "10px" }}>New</label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <input
                    type={"radio"}
                    id="doing"
                    {...field}
                    value={TASK_STATUS.DOING}
                  />
                )}
              />
              <label style={{ marginLeft: "10px" }}>Doing</label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <input
                    type={"radio"}
                    id="done"
                    {...field}
                    value={TASK_STATUS.DONE}
                  />
                )}
              />
              <label style={{ marginLeft: "10px" }}>Done</label>
            </div>
            <div className="form-button">
              <Button btn content="Save" type="submit" />
              
              {/* <Button
                btn
                content="Reset"
                type="button"
                onClick={() => {
                  reset({
                    title: "",
                    creator: "",
                    description: "",
                  });
                }}
              /> */}
              <Button
                btn
                content="Delete"
                type="button"
                onClick={handleSubmit(handleDeleteTask)}
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
}
