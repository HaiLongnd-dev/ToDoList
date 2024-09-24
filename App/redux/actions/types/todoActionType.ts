import {TTodo} from '../../../Types/Todo';
import {IActionBase} from './actionTypeBase';

export const TodoActionType = {
  ADD: 'TASK/ADD',
  EDIT: 'TASK/EDIT',
  REMOVE: 'TASK/REMOVE',
  GET_LIST: 'TASK/GET_LIST',
  TOGGLE: 'TASK/TOGGLE',
  GET_DETAIL: 'TASK/GET_DETAIL',
} as const;
export type TodoActionType =
  (typeof TodoActionType)[keyof typeof TodoActionType];

export interface IAddTaskAction extends IActionBase<{task: TTodo}> {
  type: typeof TodoActionType.ADD;
}
export interface IEditTaskAction
  extends IActionBase<{id: TTodo['id']; task: Partial<TTodo>}> {
  type: typeof TodoActionType.EDIT;
}
export interface IRemoveTaskAction extends IActionBase<{id: TTodo['id']}> {
  type: typeof TodoActionType.REMOVE;
}
export interface IGetListTaskAction extends IActionBase<{}> {
  type: typeof TodoActionType.GET_LIST;
}
export interface IToggleTaskStatusAction
  extends IActionBase<{id: TTodo['id']}> {
  type: typeof TodoActionType.TOGGLE;
}
export interface IGetDetailTaskAction extends IActionBase<{id: TTodo['id']}> {
  type: typeof TodoActionType.GET_DETAIL;
}
export type ITaskAction =
  | IAddTaskAction
  | IEditTaskAction
  | IRemoveTaskAction
  | IGetListTaskAction
  | IToggleTaskStatusAction
  | IGetDetailTaskAction;
