import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {TTodo} from '../../Types/Todo';
import Navigator from '../../navigation/NavigationService';
export interface DetailToDoScreenViewProps {
  item: TTodo;
}
const DetailTodoScreenView = ({item}: DetailToDoScreenViewProps) => {
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
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailTodoScreenView;
