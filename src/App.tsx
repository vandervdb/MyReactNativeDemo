import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './theme';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>HomeScreen</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
