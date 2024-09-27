import {all, call, put, takeLatest} from 'redux-saga/effects';
import {TTask} from '../../Types/Todo';
import {addTodoByIdApi, getListAllTodoApi} from '../../services/apis/TodoApis';
import {IAddTaskAction, TodoActionType} from '../actions/types/todoActionType';
import {addTaskActionSuccess, saveListTaskAction} from '../actions/todoAction';

function* getListTaskSaga() {
  const response: {data: TTask[]} = yield call(getListAllTodoApi);
  put(saveListTaskAction(response.data));
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
function* watchGetListTask() {
  yield takeLatest(TodoActionType.GET_LIST, getListTaskSaga);
}
export default function* taskSagas() {
  yield all([watchGetListTask(), watchAddTask()]);
}
