import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './navigation/Stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const Index = () => {
  return (
    // <SafeAreaProvider>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    // {/* </SafeAreaProvider> */}
  );
};

export default Index;

const styles = StyleSheet.create({});
