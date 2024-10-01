import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {TTask} from '../../Types/Todo';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

export interface DetailToDoScreenViewProps {
  item: TTask;
  deleteTask: (id: TTask['id']) => void;
}
const DetailTodoScreenView = ({
  item,
  deleteTask,
}: DetailToDoScreenViewProps) => {
  const handleDeleteTask = () => {
    deleteTask(item.id);
  };
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
          <Text style={[styles.text, styles.fontBig, styles.whiteColor]}>
            TASK DETAIL
          </Text>
        </View>
      </View>
      <View style={styles.detail}>
        <View style={styles.content}>
          <View>
            <Text style={[styles.fontBtn, styles.text]}>{item.title}</Text>
            <Text style={[styles.text]}>{item.description}</Text>
            <Text style={[styles.text]}>{item.createdAt}</Text>
            <Text style={[styles.text]}>{item.updatedAt}</Text>
          </View>
          <View style={styles.status}>
            {item.isDone ? (
              <Text style={[styles.text, styles.fontBig]}>Done</Text>
            ) : (
              <Text style={[styles.text, styles.fontBig]}>Not Done!</Text>
            )}
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              Navigator.navigateTo(SCREEN_NAME.MANUAL.EDIT_TASK_SCREEN, {
                task: item,
              });
            }}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDeleteTask}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailTodoScreenView;
