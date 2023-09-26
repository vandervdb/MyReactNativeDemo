import React from 'react';
import {Text, View} from 'react-native';
import CardComponent from '../CardComponent';
import tw from '../../../lib/tailwind';
import {TNavHomeScreenProps} from '../../appTypes';

const HomeScreen = ({navigation}: TNavHomeScreenProps) => {
  console.log('__HomeScreen__');
  return (
    <View style={tw`bg-gray flex-1`}>
      <Text style={tw`italic font-bold`}>HomeScreen</Text>
      <CardComponent
        testId={'HomeScreenCard'}
        title={'Redux ToolKit'}
        content={
          'Testing the use of Redux ToolKit \n ' +
          '*Implementation of RTK Query to manage API calls \n' +
          '*Implementation of Redux to manage state '
        }
        onPress={() => navigation.navigate('ReduxToolkitScreen')}
        // onPress={() => Logger.debug('onPress')}
      />
    </View>
  );
};
export default HomeScreen;
