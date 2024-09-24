import React from 'react';
import DetailToDoScreenView from './view';
import {NavigationStackParamList} from '../../navigation/Stack';
import {RouteProp} from '@react-navigation/native';
import SCREEN_NAME from '../../navigation/ScreenName';

type DetailTaskScreenRouteProp = RouteProp<
  NavigationStackParamList,
  typeof SCREEN_NAME.MANUAL.DETAIL_TASK_SCREEN
>;

type DetailTaskProps = {
  route: DetailTaskScreenRouteProp;
};

const DetailToDoScreen = ({route}: DetailTaskProps) => {
  const item = route.params.task;
  return <DetailToDoScreenView item={item} />;
};

export default DetailToDoScreen;
