import React from 'react';
import EditToDoScreenView from './view';
import {NavigationStackParamList} from '../../navigation/Stack';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';

type EditTaskScreenRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.EDIT_TASK_SCREEN
>;
type EditTaskProps = {
  route: EditTaskScreenRouteProp;
};
const EditToDoScreen = ({route}: EditTaskProps) => {
  const item = route.params.task;

  return <EditToDoScreenView item={item} />;
};

export default EditToDoScreen;
