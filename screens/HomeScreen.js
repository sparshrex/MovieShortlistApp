import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/movieSlice';
import { fetchMovies } from '../api/movies';
import MovieCard from '../components/MovieCard';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const { data: movies, error, isLoading } = useQuery({
    queryKey: ['movies', query],
    queryFn: () => fetchMovies(query),
    enabled: !!query,
  });

  const handleShortlist = (movie) => {
    dispatch(addMovie(movie));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          placeholder="Search for movies..."
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>

      {isLoading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>Error fetching movies.</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <MovieCard movie={item} onShortlist={handleShortlist} />
        )}
        style={styles.movieList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  movieList: {
    marginTop: 10,
  },
  loadingText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});

export default HomeScreen;
