import React from 'react';
import {Text, View} from 'react-native';
import {Logger} from '../../debug/Logger';

const NoteScreen = () => {
  Logger.debug('__NoteScreen__');
  return (
    <View>
      <Text>NoteScreen</Text>
    </View>
  );
};
export default NoteScreen;
