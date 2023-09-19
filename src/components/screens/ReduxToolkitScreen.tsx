import {View} from 'react-native';
import tw from '../../../lib/tailwind';
import CardComponent from '../CardComponent';
import {Text as TextP} from 'react-native-paper';
import React from 'react';

const ReduxToolkitScreen = ({navigation}) => {
  console.log('__ReduxToolkitScreen__');
  return (
    <View style={tw`bg-gray flex-1`}>
      <TextP style={tw`m-5`} variant="headlineLarge">
        Testing Redux ToolKit
      </TextP>
      <CardComponent
        contentStyle={tw`mb-3 mx-2`}
        title={'Redux ToolKit'}
        content={
          'Testing the use of Redux ToolKit \n ' +
          '*Implementation of RTK Query to manage API calls \n'
        }
        onPress={() => navigation.navigate('NoteListScreen')}
        // onPress={() => Logger.debug('onPress')}
      />
      <CardComponent
        contentStyle={tw`mb-2 mx-2`}
        title={'Redux ToolKit'}
        content={
          'Testing the use of Redux ToolKit \n ' +
          '*Implementation of Redux to manage state '
        }
        onPress={() => navigation.navigate('NoteListScreen')}
        // onPress={() => Logger.debug('onPress')}
      />
    </View>
  );
};

export default ReduxToolkitScreen;
