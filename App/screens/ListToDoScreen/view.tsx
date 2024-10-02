import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import ItemComponent from '../../components/Item';
import {TTask} from '../../Types/Todo';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';
interface ListToDoScreenViewProps {
  data: TTask[];
}
const ListToDoScreenView = ({data}: ListToDoScreenViewProps) => {
  console.log('data========',data);
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.text, styles.fontBig]}>List To-Do</Text>
      </View>
      <View style={styles.borderBottom}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            Navigator.navigateTo(SCREEN_NAME.MANUAL.ADD_TASK_SCREEN);
          }}>
          <Text style={[styles.text, styles.fontBtn]}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              Navigator.navigateTo(SCREEN_NAME.MANUAL.DETAIL_TASK_SCREEN, {
                task: item,
              })
            }>
            <ItemComponent item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListToDoScreenView;
