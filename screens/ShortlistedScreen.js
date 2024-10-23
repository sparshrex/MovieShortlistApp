import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const ShortlistedScreen = () => {
  const shortlistedMovies = useSelector((state) => state.movies.shortlisted);

  return (
    <View style={styles.container}>
      {shortlistedMovies.length === 0 ? (
        <Text style={styles.emptyText}>No movies shortlisted yet.</Text>
      ) : (
        <FlatList
          data={shortlistedMovies}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
});

export default ShortlistedScreen;
