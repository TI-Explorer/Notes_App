// HomeScreen.js

import React, { useState } from 'react';
import { View, StyleSheet, Button} from 'react-native';
import NoteList from '../src/NoteList';
import AddNoteForm from '../src/addNoteForm';
import { useTheme } from '../themes/themeContext';

const HomeScreen = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const { theme } = useTheme();

  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleNotePress = (selectedNote) => {
    console.log('Selected Note:', selectedNote);
  };

  return (
    <View style={styles.container}>
      <Button title={`Toggle ${isDarkMode ? 'Light' : 'Dark'} Mode`} onPress={toggleTheme} />
      <NoteList notes={notes} onNotePress={handleNotePress} />
      <AddNoteForm onAddNote={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
