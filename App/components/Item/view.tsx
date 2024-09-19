import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import {TTodo} from '../../Types/Todo';
interface ItemComponentProps {
  title: TTodo['title'];
  description: TTodo['description'];
  timeCreate: TTodo['createdAt'];
  timeUpdate: TTodo['updatedAt'];
  isDone: TTodo['isDone'];
}
const ItemComponentView = ({
  title,
  description,
  timeCreate,
  timeUpdate,
  isDone,
}: ItemComponentProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={[styles.fontBtn, styles.text]}>{title}</Text>
            <Text style={[styles.text]}>{description}</Text>
            <Text style={[styles.text]}>{timeCreate}</Text>
            <Text style={[styles.text]}>{timeUpdate}</Text>
          </View>
          <View style={styles.status}>
            {isDone ? (
              <Text style={[styles.text, styles.fontBig]}>Done</Text>
            ) : (
              <Text style={[styles.text, styles.fontBig]}>Not Done!</Text>
            )}
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.buttonText}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemComponentView;
