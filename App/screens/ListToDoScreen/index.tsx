import React from 'react';
import SearchScreenView from './view';
import ListToDoScreenView from './view';
import {TTodo} from '../../Types/Todo';
const DATA: TTodo[] = [
  {
    id: '648e070a36b0cc220c8a7883',
    createdAt: '2023-06-17T19:18:34.462Z',
    description: 'Some description about todo',
    isDone: false,
    title: 'Learn python',
    updatedAt: '2023-06-17T19:18:34.462Z',
  },
  {
    id: '648e0741aeefd0cfa40adddd',
    createdAt: '2023-06-17T19:19:29.887Z',
    description: '',
    isDone: false,
    title: 'Learn Javascript',
    updatedAt: '2023-06-17T19:19:29.887Z',
  },
  {
    id: '648e0746aeefd0cfa40adddf',
    createdAt: '2023-06-17T19:19:34.866Z',
    description: '',
    isDone: true,
    title: 'Learn ReactJs',
    updatedAt: '2023-06-17T19:19:34.866Z',
  },
  {
    id: '648e0749aeefd0cfa40adde1',
    createdAt: '2023-06-17T19:19:37.856Z',
    description: '',
    isDone: false,
    title: 'Learn Ruby',
    updatedAt: '2023-06-17T19:19:37.856Z',
  },
];
const ListToDoScreen = () => {
  return <ListToDoScreenView data={DATA} />;
};

export default ListToDoScreen;
