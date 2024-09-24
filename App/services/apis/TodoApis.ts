import {TTodo} from '../../Types/Todo';
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
  return http.get(
    'https://api.freeapi.app/api/v1/todos?query=reactjs&complete=false',
  );
};
export const getTodoByIdApi = (
  taskId: TTodo['id'],
): Promise<IResponseGetTodoByIdApi> => {
  return http.get(`https://api.freeapi.app/api/v1/todos/${taskId}`);
};
export const deleteTodoByIdApi = (
  taskId: TTodo['id'],
): Promise<IResponseDeleteTodoByIdApi> => {
  return http.delete(`https://api.freeapi.app/api/v1/todos/${taskId}`);
};
export const updateTodoByIdApi = (
  taskId: TTodo['id'],
): Promise<IResponseUpdateTodoByIdApi> => {
  return http.put(`https://api.freeapi.app/api/v1/todos/${taskId}`);
};
export const addTodoByIdApi = (
  taskId: TTodo['id'],
): Promise<IResponseAddTodoApi> => {
  return http.post(`https://api.freeapi.app/api/v1/todos/${taskId}`);
};
export const toggleTodoStatusByIdApi = (
  taskId: TTodo['id'],
): Promise<IResponseToggleTodoStatusApi> => {
  return http.put(
    `https://api.freeapi.app/api/v1/todos/toggle/status/${taskId}`,
  );
};
