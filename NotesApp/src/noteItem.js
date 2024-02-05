// NoteItem.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../themes/themeContext';

const NoteItem = ({ note, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={() => onPress(note)}>
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.title, { color: theme.textColor }]}>{note.title}</Text>
        <Text style={[styles.content, { color: theme.textColor }]}>{note.content}</Text>
        <Text style={[styles.folder, { color: theme.textColor }]}>Folder: {note.folder}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginTop: 8,
  },
  folder: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default NoteItem;
