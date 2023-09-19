import React from 'react';
import {Text, View} from 'react-native';
import CardComponent from '../CardComponent';
import {Logger} from '../../debug/Logger';
import tw from '../../../lib/tailwind';

const HomeScreen = ({navigation}) => {
  console.log('__HomeScreen__');
  return (
    <View style={tw`bg-gray-dark`}>
      <Text style={tw`italic font-bold`}>HomeScreen</Text>
      <CardComponent
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
