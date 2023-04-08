/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Heading = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.boldText}>S</Text> STREAMIT
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {
    fontWeight: '900',
    fontSize: 20,
    color: 'red',
    marginLeft: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default Heading;
