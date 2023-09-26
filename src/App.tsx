import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NoteListScreen from './components/screens/NoteListScreen';
import NoteScreen from './components/screens/NoteScreen';
import HomeScreen from './components/screens/HomeScreen';
import ReduxToolkitScreen from './components/screens/ReduxToolkitScreen';
import {PaperProvider} from 'react-native-paper';
import EditNoteScreen from './components/screens/EditNoteScreen';
import {LogBox} from 'react-native';
import {TRootStackParamList} from './appTypes';

// LogBox.ignoreLogs(['Info: ...']);
LogBox.ignoreAllLogs(true);

const RootStack = createStackNavigator<TRootStackParamList>();
const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="HomeScreen">
            {/*<Stack.Navigator>*/}
            <RootStack.Screen name="HomeScreen" component={HomeScreen} />
            <RootStack.Screen
              name="ReduxToolkitScreen"
              component={ReduxToolkitScreen}
            />
            <RootStack.Screen
              name="NoteListScreen"
              component={NoteListScreen}
            />
            <RootStack.Screen name="NoteScreen" component={NoteScreen} />
            <RootStack.Screen
              name="EditNoteScreen"
              component={EditNoteScreen}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
};

export default App;
