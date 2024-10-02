import React, {useEffect} from 'react';
import ListToDoScreenView from './view';
import {TTask} from '../../Types/Todo';
import {getListTask} from '../../redux/selector/taskSelector';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getListTaskAction} from '../../redux/actions/todoAction';

const ListToDoScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const listTask: TTask[] = useSelector(getListTask);
  console.log('listTask======', listTask);

  useEffect(() => {
    dispatch(getListTaskAction());
  }, [dispatch]);

  return <ListToDoScreenView data={listTask} />;
};

export default ListToDoScreen;
