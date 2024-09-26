import {TTask} from '../../Types/Todo';
import {
  IResponseAddTodoApi,
  IResponseDeleteTodoByIdApi,
  IResponseGetAllTodoApi,
  IResponseGetTodoByIdApi,
  IResponseToggleTodoStatusApi,
  IResponseUpdateTodoByIdApi,
} from '../apiType/todoApiTypes';
import http from '../http';

export const getListAllTodoApi = (): Promise<IResponseGetAllTodoApi> => {
  console.log('run4');

  return http.get(
    'https://api.freeapi.app/api/v1/todos?query=reactjs&complete=false',
  );
};
export const getTodoByIdApi = (
  taskId: TTask['id'],
): Promise<IResponseGetTodoByIdApi> => {
  return http.get(`https://api.freeapi.app/api/v1/todos/${taskId}`);
};
export const deleteTodoByIdApi = (
  taskId: TTask['id'],
): Promise<IResponseDeleteTodoByIdApi> => {
  return http.delete(`https://api.freeapi.app/api/v1/todos/${taskId}`);
};
export const updateTodoByIdApi = (
  taskId: TTask['id'],
): Promise<IResponseUpdateTodoByIdApi> => {
  return http.put(`https://api.freeapi.app/api/v1/todos/${taskId}`);
};
export const addTodoByIdApi = (
  taskId: TTask['id'],
): Promise<IResponseAddTodoApi> => {
  return http.post(`https://api.freeapi.app/api/v1/todos/${taskId}`);
};
export const toggleTodoStatusByIdApi = (
  taskId: TTask['id'],
): Promise<IResponseToggleTodoStatusApi> => {
  return http.put(
    `https://api.freeapi.app/api/v1/todos/toggle/status/${taskId}`,
  );
};
