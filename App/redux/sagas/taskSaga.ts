import {all, call, put, takeLatest} from 'redux-saga/effects';
import {TTask} from '../../Types/Todo';
import {
  addTodoByIdApi,
  deleteTodoByIdApi,
  getListAllTodoApi,
  toggleTodoStatusByIdApi,
  updateTodoByIdApi,
} from '../../services/apis/TodoApis';
import {
  IAddTaskAction,
  IEditTaskAction,
  IRemoveTaskAction,
  IToggleTaskStatusAction,
  TodoActionType,
} from '../actions/types/todoActionType';
import {
  addTaskActionSuccess,
  saveListTaskAction,
  toggleTaskStatusSuccessAction,
} from '../actions/todoAction';

function* getListTaskSaga() {
  const response: {data: TTask[]} = yield call(getListAllTodoApi);
  put(saveListTaskAction(response.data));
}
function* watchGetListTask() {
  yield takeLatest(TodoActionType.GET_LIST, getListTaskSaga);
}
function* addTaskSaga(action: IAddTaskAction) {
  const {task} = action.payload.params;
  const response: {data: any} = yield call(addTodoByIdApi, task);
  const createdTask: TTask = {
    id: response.data?._id,
    createdAt: response.data.createdAt,
    description: response.data.description,
    isDone: response.data.isDone,
    title: response.data.title,
    updatedAt: response.data.updatedAt,
  };

  yield put(addTaskActionSuccess(createdTask));
}

function* watchAddTask() {
  yield takeLatest(TodoActionType.ADD, addTaskSaga);
}
function* toggleTaskStatusSaga(action: IToggleTaskStatusAction) {
  const {id} = action.payload.params;
  const response: {data: any} = yield call(toggleTodoStatusByIdApi, id);
  const updatedTask: TTask = {
    id: response.data?._id,
    createdAt: response.data.createdAt,
    description: response.data.description,
    isDone: response.data.isDone,
    title: response.data.title,
    updatedAt: response.data.updatedAt,
  };

  yield put(toggleTaskStatusSuccessAction(updatedTask));
}
function* deleteTaskSaga(action: IRemoveTaskAction) {
  const {id} = action.payload.params;
  const response: {data: {}} = yield call(deleteTodoByIdApi, id);
}
function* watchDeleteTask() {
  yield takeLatest(TodoActionType.REMOVE, deleteTaskSaga);
}
function* editTaskSaga(action: IEditTaskAction) {
  const {id} = action.payload.params;
  const response: {data: {}} = yield call(updateTodoByIdApi, id);
}
function* watchEditTask() {
  yield takeLatest(TodoActionType.REMOVE, editTaskSaga);
}
function* watchToggleTaskStatus() {
  yield takeLatest(TodoActionType.TOGGLE, toggleTaskStatusSaga);
}

export default function* taskSagas() {
  yield all([
    watchGetListTask(),
    watchAddTask(),
    watchToggleTaskStatus(),
    watchDeleteTask(),
    watchEditTask(),
  ]);
}
