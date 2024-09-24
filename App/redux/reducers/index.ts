import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['book'],
  timeout: 10000,
};
export interface IGlobalState {
}
const combineReducer = combineReducers({
});
const rootReducer = (state: IGlobalState, action: any) => {
  return combineReducer(state, action);
};
export default persistReducer(rootPersistConfig, rootReducer);
