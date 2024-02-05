import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NoteItem from './noteItem';

const NoteList = ({ notes, onNotePress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NoteItem note={item} onPress={onNotePress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NoteList;