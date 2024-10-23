import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addMovie, removeMovie } from '../redux/movieSlice';

const ShortlistButton = ({ movie, isShortlisted }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    if (isShortlisted) {
      dispatch(removeMovie(movie.imdbID));
    } else {
      dispatch(addMovie(movie));
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Icon
        name={isShortlisted ? 'remove-circle-outline' : 'add-circle-outline'}
        size={20}
        color="#007BFF"
      />
      <Text style={styles.buttonText}>
        {isShortlisted ? 'Remove' : 'Shortlist'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#007BFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ShortlistButton;
