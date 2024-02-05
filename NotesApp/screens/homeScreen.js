// HomeScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, Button} from 'react-native';
import NoteList from '../src/NoteList';
import AddNoteForm from '../src/addNoteForm';
import { useNotes } from '../src/notesContext'; // Adjust the path accordingly
import { useTheme } from '../themes/themeContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (navigation) => {
  const { toggleTheme, isDarkMode } = useTheme();
  const { theme } = useTheme();
  const navigate = useNavigation();
  const { notes } = useNotes();

  const handleNotePress = (selectedNote) => {
    console.log('Selected Note:', selectedNote);
    navigate.navigate('NoteDetailsScreen', { note: selectedNote });
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor }]}>
      <Button title={`Toggle ${isDarkMode ? 'Light' : 'Dark'} Mode`} onPress={toggleTheme} />
      <NoteList notes={notes} onNotePress={handleNotePress} />
      <Button title = {'take new note'} onPress = {() => navigate.navigate('TakeNotesScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
