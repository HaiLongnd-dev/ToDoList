import React from 'react';
import ItemComponentView from './view';
import {TTodo} from '../../Types/Todo';

interface ItemComponentProps {
  title: TTodo['title'];
  description: TTodo['description'];
  timeCreate: TTodo['createdAt'];
  isDone: TTodo['isDone'];
  timeUpdate: TTodo['updatedAt'];
}
const ItemComponent = ({
  title,
  description,
  timeCreate,
  timeUpdate,
  isDone,
}: ItemComponentProps) => {
  return (
    <ItemComponentView
      title={title}
      description={description}
      timeCreate={timeCreate}
      timeUpdate={timeUpdate}
      isDone={isDone}
    />
  );
};

export default ItemComponent;
