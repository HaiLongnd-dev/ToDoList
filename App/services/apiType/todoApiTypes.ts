import {TTask} from '../../Types/Todo';
import {IApiResponse} from './apiTypeBase';

export interface IResponseGetAllTodoApi extends IApiResponse<TTask[]> {}
export interface IResponseGetTodoByIdApi extends IApiResponse<TTask> {}
export interface IResponseDeleteTodoByIdApi
  extends IApiResponse<{deleteTodo: TTask}> {}
export interface IResponseUpdateTodoByIdApi extends IApiResponse<TTask> {}
export interface IResponseAddTodoApi extends IApiResponse<TTask> {}
export interface IResponseToggleTodoStatusApi extends IApiResponse<TTask> {}
