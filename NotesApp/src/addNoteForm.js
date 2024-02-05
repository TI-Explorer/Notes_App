// AddNoteForm.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddNoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [folder, setFolder] = useState('');

  const handleAddNote = () => {
    if (title.trim() !== '' && content.trim() !== '' && folder.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title,
        content,
        folder,
      };

      onAddNote(newNote);

      setTitle('');
      setContent('');
      setFolder('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Note Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Note Content"
        multiline
        numberOfLines={4}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Folder"
        value={folder}
        onChangeText={(text) => setFolder(text)}
      />
      <Button title="Add Note" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    fontSize: 16,
  },
});

export default AddNoteForm;
