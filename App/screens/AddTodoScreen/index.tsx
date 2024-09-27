import React from 'react';
import AddTodoScreenView from './view';
import {useDispatch} from 'react-redux';
import {addTaskAction} from '../../redux/actions/todoAction';
import {TTask} from '../../Types/Todo';
import {AppDispatch} from '../../redux/store';

const AddTodoScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const addTask = (task: TTask) => {
    dispatch(addTaskAction(task));
  };
  return <AddTodoScreenView addTask={addTask} />;
};

export default AddTodoScreen;
