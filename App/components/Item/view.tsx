import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {TTask} from '../../Types/Todo';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

export interface ItemComponentViewProps {
  item: TTask;
  toggleTaskStatus: (task: TTask) => void;
}

const ItemComponentView = ({
  item,
  toggleTaskStatus,
}: ItemComponentViewProps) => {
  const handleToggleStatus = () => {
    toggleTaskStatus(item);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inform}>
        <View style={styles.left}>
          <Text style={[styles.fontBtn, styles.text]}>{item.title}</Text>
          <View style={styles.statusBar}>
            {item.isDone ? (
              <Text style={[styles.status, styles.doneStatus]}>Done</Text>
            ) : (
              <Text style={[styles.status, styles.doingStatus]}>
                In Progress
              </Text>
            )}
          </View>
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            style={[
              styles.circleButton,
              {borderColor: item.isDone ? '#007bff' : '#aaa'},
            ]}
            onPress={handleToggleStatus}>
            {item.isDone && <View style={styles.innerCircle} />}
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.text]}>{item.description}</Text>
      <Text style={[styles.text]}>{item.createdAt}</Text>
      <Text style={[styles.text]}>{item.updatedAt}</Text>

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
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemComponentView;
