import React, {useEffect} from 'react';
import SearchScreenView from './view';
import ListToDoScreenView from './view';
import {TTask} from '../../Types/Todo';
import {getListTask} from '../../redux/selector/taskSelector';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {getListTaskAction} from '../../redux/actions/todoAction';
import {TCallback} from '../../redux/actions/types/actionTypeBase';
// const DATA: TTask[] = [
//   {
//     id: '648e070a36b0cc220c8a7883',
//     createdAt: '2023-06-17T19:18:34.462Z',
//     description: 'Some description about todo',
//     isDone: false,
//     title: 'Learn python',
//     updatedAt: '2023-06-17T19:18:34.462Z',
//   },
//   {
//     id: '648e0741aeefd0cfa40adddd',
//     createdAt: '2023-06-17T19:19:29.887Z',
//     description: '',
//     isDone: false,
//     title: 'Learn Javascript',
//     updatedAt: '2023-06-17T19:19:29.887Z',
//   },
//   {
//     id: '648e0746aeefd0cfa40adddf',
//     createdAt: '2023-06-17T19:19:34.866Z',
//     description: '',
//     isDone: true,
//     title: 'Learn ReactJs',
//     updatedAt: '2023-06-17T19:19:34.866Z',
//   },
//   {
//     id: '648e0749aeefd0cfa40adde1',
//     createdAt: '2023-06-17T19:19:37.856Z',
//     description: '',
//     isDone: false,
//     title: 'Learn Ruby',
//     updatedAt: '2023-06-17T19:19:37.856Z',
//   },
// ];
const ListToDoScreen = () => {
  const listTask: TTask[] = useSelector(getListTask);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const callback: TCallback = value => {
      console.log('============valueee============', value);
    };
    dispatch(getListTaskAction(callback));
  }, [dispatch]);
  return <ListToDoScreenView data={listTask} />;
};

export default ListToDoScreen;
