import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {TTodo} from '../../Types/Todo';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

export interface ItemComponentViewProps {
  item: TTodo;
}
const ItemComponentView = ({item}: ItemComponentViewProps) => {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemComponentView;
