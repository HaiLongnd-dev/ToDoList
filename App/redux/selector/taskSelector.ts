import {createSelector} from 'reselect';
import {IGlobalState} from '../reducers';

const getTask = (state: IGlobalState) => state.task;
export const getListTask = createSelector([getTask], state => state.tasks);
