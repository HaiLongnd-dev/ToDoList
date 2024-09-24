import React from 'react';
import ItemComponentView from './view';
import {ItemComponentViewProps} from './view';
interface ItemComponentProps extends ItemComponentViewProps {}
const ItemComponent = ({item}: ItemComponentProps) => {
  return <ItemComponentView item={item} />;
};

export default ItemComponent;
