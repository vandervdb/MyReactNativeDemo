import reactotron, {networking} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';

const tron = reactotron.setAsyncStorageHandler!(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .use(
    networking({
      ignoreUrls: /symbolicate/,
    }),
  )
  .configure();

if (__DEV__) {
  console.log('Reactotron is starting');
  tron.connect();
  tron.clear!();
}

export default tron;
