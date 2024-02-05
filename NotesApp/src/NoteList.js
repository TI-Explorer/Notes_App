import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import NoteItem from './noteItem';
import { useTheme } from '../themes/themeContext';
import { useNotes } from './notesContext';
const NoteList = ({ onNotePress }) => {
  const { theme } = useTheme();
  const { notes } = useNotes();
  
  
  
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <NoteItem note={item} onPress={onNotePress} />}
      // Add any other FlatList props or styling as needed
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NoteList;