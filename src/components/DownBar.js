/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="home" size={24} color="#333" />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="search" size={24} color="#333" />
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="playlist-add-check" size={24} color="#333" />
        <Text style={styles.buttonText}>Watchlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="local-offer" size={24} color="#333" />
        <Text style={styles.buttonText}>Genre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="settings" size={24} color="#333" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
  },
});

export default BottomBar;
