import {all, call, put, takeLatest} from 'redux-saga/effects';
import {TTask} from '../../Types/Todo';
import {getListAllTodoApi} from '../../services/apis/TodoApis';
import {
  IGetListTaskAction,
  TodoActionType,
} from '../actions/types/todoActionType';
import {saveListTaskAction} from '../actions/todoAction';

function* getListTaskSaga(action: IGetListTaskAction) {
  const {callback} = action.payload;
  const response: TTask[] = yield call(getListAllTodoApi);
  callback({
    success: true,
    data: response,
  });
  // console.log('responseee', response);
  // put(saveListTaskAction(response));
}
function* watchGetListTask() {
  yield takeLatest(TodoActionType.GET_LIST, getListTaskSaga);
}
export default function* taskSagas() {
  yield all([watchGetListTask()]);
}
