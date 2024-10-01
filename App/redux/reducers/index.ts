import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import taskReducer, { ITaskState } from './taskReducer';
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  timeout: 10000,
};
export interface IGlobalState {
  task: ITaskState
}
const combineReducer = combineReducers({
  task:taskReducer
});
const rootReducer = (state: IGlobalState, action: any) => {
  return combineReducer(state, action);
};
export default persistReducer(rootPersistConfig, rootReducer);
