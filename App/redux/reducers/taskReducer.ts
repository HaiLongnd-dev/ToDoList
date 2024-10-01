import {TTask} from '../../Types/Todo';
import * as actions from '../actions/types/todoActionType';
export interface ITaskState {
  tasks: TTask[];
}

const initState: ITaskState = {tasks: []};
export default function taskReducer(
  state: ITaskState = initState,
  action: actions.ITaskAction,
): ITaskState {
  switch (action.type) {
    case actions.TodoActionType.GET_LIST:
      return {
        ...state,
      };
    case actions.TodoActionType.SAVE_LIST:
      return {
        ...state,
        tasks: [...action.payload.params],
      };
    case actions.TodoActionType.ADD_SUCCESS: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload?.params.task],
      };
    }
    case actions.TodoActionType.TOGGLE_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? {
                ...task,
                isDone: !task.isDone,
              }
            : task,
        ),
      };
    }
    case actions.TodoActionType.EDIT:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? {...task, ...action.payload.params}
            : task,
        ),
      };

    case actions.TodoActionType.REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task.id !== action.payload?.params?.id,
        ),
      };

    default:
      return state;
  }
}
