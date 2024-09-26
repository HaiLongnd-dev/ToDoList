import {TTask} from '../../Types/Todo';
import {TCallback} from './types/actionTypeBase';
import {
  IAddTaskAction,
  IEditTaskAction,
  IGetDetailTaskAction,
  IGetListTaskAction,
  IRemoveTaskAction,
  ISaveListTaskAction,
  IToggleTaskStatusAction,
  TodoActionType,
} from './types/todoActionType';

export const addTaskAction = (task: TTask): IAddTaskAction => ({
  type: TodoActionType.ADD,
  payload: {params: {task}},
});
export const editTaskAction = (
  id: TTask['id'],
  task: Partial<TTask>,
): IEditTaskAction => ({
  type: TodoActionType.EDIT,
  payload: {params: {id, task}},
});
export const removeTaskAction = (id: TTask['id']): IRemoveTaskAction => ({
  type: TodoActionType.REMOVE,
  payload: {params: {id}},
});
export const getListTaskAction = (callback: TCallback): IGetListTaskAction => {
  return {
    type: TodoActionType.GET_LIST,
    payload: {callback},
  };
};
export const saveListTaskAction = (tasks: TTask[]): ISaveListTaskAction => {
  return {
    type: TodoActionType.SAVE_LIST,
    payload: {params: tasks},
  };
};
export const getDetailTaskAction = (id: TTask['id']): IGetDetailTaskAction => ({
  type: TodoActionType.GET_DETAIL,
  payload: {params: {id}},
});
export const toggleTaskStatusAction = (
  id: TTask['id'],
): IToggleTaskStatusAction => ({
  type: TodoActionType.TOGGLE,
  payload: {params: {id}},
});
