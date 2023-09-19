import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './theme';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NoteListScreen from './components/screens/NoteListScreen';
import NoteScreen from './components/screens/NoteScreen';
import HomeScreen from './components/screens/HomeScreen';
import tw from '../lib/tailwind';
import CardComponent from './components/CardComponent';
import {Logger} from './debug/Logger';
import ReduxToolkitScreen from './components/screens/ReduxToolkitScreen';

// TODO: Add Types for navigation
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="HomeScreen">
          {/*<Stack.Navigator>*/}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="ReduxToolkitScreen"
            component={ReduxToolkitScreen}
          />
          <Stack.Screen name="NoteListScreen" component={NoteListScreen} />
          <Stack.Screen name="NoteScreen" component={NoteScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
