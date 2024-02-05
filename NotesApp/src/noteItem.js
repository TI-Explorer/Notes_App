// NoteItem.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NoteItem = ({ note, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(note)}>
      <View style={styles.container}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.content}>{note.content}</Text>
        <Text style={styles.folder}>Folder: {note.folder}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
    color: '#888',
    marginTop: 4,
  },
});

export default NoteItem;
