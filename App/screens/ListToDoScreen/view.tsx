import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import ItemComponent from '../../components/Item';
import {useNavigation} from '@react-navigation/native';
import {TTodo} from '../../Types/Todo';
interface ListListToDoScreenViewProps {
  data: TTodo[];
}
const ListToDoScreenView = ({data}: ListListToDoScreenViewProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.text, styles.fontBig]}>List To-Do</Text>
      </View>
      <View style={styles.borderBottom}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('AddTaskScreen')}>
          <Text style={[styles.text, styles.fontBtn]}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => (
          <ItemComponent
            title={item.title}
            description={item.description}
            timeCreate={item.createdAt}
            timeUpdate={item.updatedAt}
            isDone={item.isDone}
          />
        )}
      />
    </View>
  );
};

export default ListToDoScreenView;
