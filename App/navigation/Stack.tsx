import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListToDoScreen from '../screens/ListToDoScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import EditToDoScreen from '../screens/EditToDoScreen';
import DeleteToDoScreen from '../screens/DeleteToDoScreen';

const Stack = createNativeStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RootScreen">
      <Stack.Screen name="RootScreen" component={ListToDoScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddTodoScreen} />
      <Stack.Screen name="EditTaskScreen" component={EditToDoScreen} />
      <Stack.Screen name="DeleteTaskScreen" component={DeleteToDoScreen} />
    </Stack.Navigator>
  );
}
export default StackScreens;
