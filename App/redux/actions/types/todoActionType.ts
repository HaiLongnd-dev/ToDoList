import {TTask} from '../../../Types/Todo';
import {IActionBase} from './actionTypeBase';

export const TodoActionType = {
  ADD: 'TASK/ADD',
  EDIT: 'TASK/EDIT',
  REMOVE: 'TASK/REMOVE',
  GET_LIST: 'TASK/GET_LIST',
  TOGGLE: 'TASK/TOGGLE',
  GET_DETAIL: 'TASK/GET_DETAIL',
  SAVE_LIST: 'TASK/SAVE_LIST',
} as const;
export type TodoActionType =
  (typeof TodoActionType)[keyof typeof TodoActionType];

export interface IAddTaskAction extends IActionBase<{task: TTask}> {
  type: typeof TodoActionType.ADD;
}
export interface IEditTaskAction
  extends IActionBase<{id: TTask['id']; task: Partial<TTask>}> {
  type: typeof TodoActionType.EDIT;
}
export interface IRemoveTaskAction extends IActionBase<{id: TTask['id']}> {
  type: typeof TodoActionType.REMOVE;
}
export interface IGetListTaskAction extends IActionBase<{}> {
  type: typeof TodoActionType.GET_LIST;
}
export interface ISaveListTaskAction extends IActionBase<TTask[]> {
  type: typeof TodoActionType.SAVE_LIST;
}
export interface IToggleTaskStatusAction
  extends IActionBase<{id: TTask['id']}> {
  type: typeof TodoActionType.TOGGLE;
}
export interface IGetDetailTaskAction extends IActionBase<{id: TTask['id']}> {
  type: typeof TodoActionType.GET_DETAIL;
}

export type ITaskAction =
  | IAddTaskAction
  | IEditTaskAction
  | IRemoveTaskAction
  | IGetListTaskAction
  | IToggleTaskStatusAction
  | IGetDetailTaskAction
  | ISaveListTaskAction;
