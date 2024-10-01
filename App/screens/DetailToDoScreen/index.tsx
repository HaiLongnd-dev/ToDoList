import React from 'react';
import DetailToDoScreenView from './view';
import {NavigationStackParamList} from '../../navigation/Stack';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {TTask} from '../../Types/Todo';
import {removeTaskAction} from '../../redux/actions/todoAction';

type DetailTaskScreenRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.DETAIL_TASK_SCREEN
>;

type DetailTaskProps = {
  route: DetailTaskScreenRouteProp;
};

const DetailToDoScreen = ({route}: DetailTaskProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteTask = (id: TTask['id']) => {
    dispatch(removeTaskAction(id));
  };
  const item = route.params.task;
  return <DetailToDoScreenView item={item} deleteTask={deleteTask} />;
};

export default DetailToDoScreen;
