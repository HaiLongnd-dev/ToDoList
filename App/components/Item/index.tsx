import React from 'react';
import ItemComponentView from './view';
import {ItemComponentViewProps} from './view';
import {useDispatch} from 'react-redux';
import {TTask} from '../../Types/Todo';
import {toggleTaskStatusAction} from '../../redux/actions/todoAction';
import {AppDispatch} from '../../redux/store';
interface ItemComponentProps extends ItemComponentViewProps {}
const ItemComponent = ({item}: ItemComponentProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleTaskStatus = (task: TTask) => {
    dispatch(toggleTaskStatusAction(task.id));
  };
  return <ItemComponentView item={item} toggleTaskStatus={toggleTaskStatus} />;
};

export default ItemComponent;
