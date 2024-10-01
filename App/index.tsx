import {DevSettings, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './navigation/Stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
const Index = () => {
  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Open Remote Debugger', () => {
        NativeDevSettings.setIsDebuggingRemotely(true);
        console.log('Debugger opened!');
      });
    }
  }, []);
  return (
    // <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackScreens />
      </PersistGate>
    </Provider>

    // {/* </SafeAreaProvider> */}
  );
};

export default Index;

const styles = StyleSheet.create({});
