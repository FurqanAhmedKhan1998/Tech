/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Heading from './src/components/Heading';
import TopBar from './src/components/TopBar';
import DownBar from './src/components/DownBar';
import MajorScreen from './src/components/MajorScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Heading />
      <TopBar />
      <MajorScreen />
      <DownBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
