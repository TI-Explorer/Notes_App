// HomeScreen.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NoteList from '../src/NoteList';
import AddNoteForm from '../src/addNoteForm';

const HomeScreen = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleNotePress = (selectedNote) => {
    console.log('Selected Note:', selectedNote);
  };

  return (
    <View style={styles.container}>
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
