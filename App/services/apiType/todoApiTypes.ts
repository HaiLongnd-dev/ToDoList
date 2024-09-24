import {TTodo} from '../../Types/Todo';
import {IApiResponse} from './apiTypeBase';

export interface IResponseGetAllTodoApi extends IApiResponse<TTodo[]> {}
export interface IResponseGetTodoByIdApi extends IApiResponse<TTodo> {}
export interface IResponseDeleteTodoByIdApi
  extends IApiResponse<{deleteTodo: TTodo}> {}
export interface IResponseUpdateTodoByIdApi extends IApiResponse<TTodo> {}
export interface IResponseAddTodoApi extends IApiResponse<TTodo> {}
export interface IResponseToggleTodoStatusApi extends IApiResponse<TTodo> {}
