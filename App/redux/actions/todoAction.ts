import {TTodo} from '../../Types/Todo';
import {
  IAddTaskAction,
  IEditTaskAction,
  IGetDetailTaskAction,
  IGetListTaskAction,
  IRemoveTaskAction,
  IToggleTaskStatusAction,
  TodoActionType,
} from './types/todoActionType';

export const addTaskAction = (task: TTodo): IAddTaskAction => ({
  type: TodoActionType.ADD,
  payload: {params: {task}},
});
export const editTaskAction = (
  id: TTodo['id'],
  task: Partial<TTodo>,
): IEditTaskAction => ({
  type: TodoActionType.EDIT,
  payload: {params: {id, task}},
});
export const removeTaskAction = (id: TTodo['id']): IRemoveTaskAction => ({
  type: TodoActionType.REMOVE,
  payload: {params: {id}},
});
export const getListTaskAction = (): IGetListTaskAction => ({
  type: TodoActionType.GET_LIST,
});
export const getDetailTaskAction = (id: TTodo['id']): IGetDetailTaskAction => ({
  type: TodoActionType.GET_DETAIL,
  payload: {params: {id}},
});
export const toggleTaskStatusAction = (
  id: TTodo['id'],
): IToggleTaskStatusAction => ({
  type: TodoActionType.TOGGLE,
  payload: {params: {id}},
});
