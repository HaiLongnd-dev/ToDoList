import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {TTask} from '../../Types/Todo';
import Navigator from '../../navigation/NavigationService';
interface ListToDoScreenViewProps {
  item: TTask;
}
const EditTodoScreenView = ({item}: ListToDoScreenViewProps) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            Navigator.goBack();
          }}
          style={styles.back}>
          <Text style={[styles.whiteColor, styles.backBtn]}>{`<`}</Text>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={[styles.text, styles.fontBig]}>Edit To-Do</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter task title"
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter task description"
        />

        <TouchableOpacity style={styles.addBtn}>
          <Text style={[styles.text, styles.fontBtn]}>Confirm Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditTodoScreenView;
