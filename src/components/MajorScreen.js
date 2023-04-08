/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  {
    id: '1',
    title: 'Stranger Things',
    image: require('../assets/stranger-things.jpg'),
    rating: 'TV-14',
    year: '2016',
  },
  {
    id: '2',
    title: 'Narcos',
    image: require('../assets/narcos.jpg'),
    rating: 'TV-MA',
    year: '2015',
  },
  {
    id: '3',
    title: 'The Crown',
    image: require('../assets/the-crown.jpg'),
    rating: 'TV-MA',
    year: '2016',
  },
  {
    id: '4',
    title: 'Breaking Bad',
    image: require('../assets/breaking-bad.jpg'),
    rating: 'TV-MA',
    year: '2008',
  },
  {
    id: '5',
    title: 'Black Mirror',
    image: require('../assets/black-mirror.jpg'),
    rating: 'TV-MA',
    year: '2011',
  },
  {
    id: '6',
    title: "The Queen's Gambit",
    image: require('../assets/the-queens-gambit.jpg'),
    rating: 'TV-MA',
    year: '2020',
  },
];

const StartScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={12} color="#ffc107" />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.year}>{item.year}</Text>
          <Icon name="hd" size={12} color="#fff" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="search" size={24} color="#fff" />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  item: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
});

export default StartScreen;
