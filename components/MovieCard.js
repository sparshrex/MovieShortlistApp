import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import ShortlistButton from './ShortlistButton';

const MovieCard = ({ movie }) => {
  const shortlistedMovies = useSelector((state) => state.movies.shortlisted);
  const isShortlisted = shortlistedMovies.some((m) => m.imdbID === movie.imdbID);

  return (
    <View style={styles.card}>
      <Image source={{ uri: movie.Poster }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.Title}</Text>
        <Text style={styles.year}>{movie.Year}</Text>
        <ShortlistButton movie={movie} isShortlisted={isShortlisted} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  year: {
    color: '#666',
    marginBottom: 10,
  },
});

export default MovieCard;
