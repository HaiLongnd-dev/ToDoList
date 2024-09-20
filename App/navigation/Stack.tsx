import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListToDoScreen from '../screens/ListToDoScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import EditToDoScreen from '../screens/EditToDoScreen';
import DeleteToDoScreen from '../screens/DeleteToDoScreen';
import SCREEN_NAME from './ScreenName';

export type StackParamList = {
  ADD_TASK_SCREEN: undefined;
  EDIT_TASK_SCREEN: undefined;
  DELETE_TASK_SCREEN: undefined;
};

export interface NavigationStackParamList
  extends Record<string, object | undefined> {
  ROOT: NavigatorScreenParams<StackParamList>;
}

export type ScreenNameKeys = keyof NavigationStackParamList;
export type NavigationParams = {
  [K in keyof NavigationStackParamList]: NavigationStackParamList[K] extends NavigatorScreenParams<
    infer P
  >
    ? NavigatorScreenParams<P>
    : undefined;
};

const Stack = createNativeStackNavigator<NavigationStackParamList>();

function StackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREEN_NAME.MANUAL.ROOT}>
      <Stack.Screen name={SCREEN_NAME.MANUAL.ROOT} component={ListToDoScreen} />
      <Stack.Screen
        name={SCREEN_NAME.MANUAL.ADD_TASK_SCREEN}
        component={AddTodoScreen}
      />
      <Stack.Screen
        name={SCREEN_NAME.MANUAL.EDIT_TASK_SCREEN}
        component={EditToDoScreen}
      />
      <Stack.Screen
        name={SCREEN_NAME.MANUAL.DELETE_TASK_SCREEN}
        component={DeleteToDoScreen}
      />
    </Stack.Navigator>
  );
}
export default StackScreens;
