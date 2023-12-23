/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './global.css';
import React from 'react';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View className={'h-full flex-col items-center justify-center'}>
      <Text
        className={'bg-blue-300 dark:bg-red-500 text-black dark:text-gray-50'}>
        Hello World
      </Text>
    </View>
  );
}

export default App;
