import axiosClient from "../utils/axiosClient";

export const getAllTasks = async () => {
  const { data } = await axiosClient.get("tasks");
  return data;
};
export const getTaskById = async (id) => {
  const { data } = await axiosClient.get(`tasks/${id}`);
  return data;
};
export const addTask = async (body) => {
  await axiosClient.post("tasks", { ...body });
};
export const deleteTask = async (id) => {
  await axiosClient.delete(`tasks/${id}`);
};