import React from 'react';
import EditToDoScreenView from './view';
import {NavigationStackParamList} from '../../navigation/Stack';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {TTask} from '../../Types/Todo';
import {editTaskAction} from '../../redux/actions/todoAction';

type EditTaskScreenRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.EDIT_TASK_SCREEN
>;
type EditTaskProps = {
  route: EditTaskScreenRouteProp;
};
const EditToDoScreen = ({route}: EditTaskProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const editTask = (id: TTask['id'], task: Partial<TTask>) => {
    dispatch(editTaskAction(id, task));
  };
  const item = route.params.task;
  return <EditToDoScreenView item={item} editTask={editTask}/>;
};

export default EditToDoScreen;
