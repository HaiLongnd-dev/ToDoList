import {TodoActionType} from './todoActionType';

export type TCallback = ({
  success,
  data,
  message,
}: {
  success: boolean;
  data?: any;
  message?: string;
}) => void;

export interface IActionBase<T> {
  type: TodoActionType;
  payload?: {params?: T; callback?: TCallback};
}
