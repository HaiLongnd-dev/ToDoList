import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const AddTodoScreenView = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.back}>
          <Text style={[styles.whiteColor, styles.backBtn]}>{`<`}</Text>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={[styles.text, styles.fontBig]}>Add To-Do</Text>
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
          <Text style={[styles.text, styles.fontBtn]}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodoScreenView;
