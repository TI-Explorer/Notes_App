import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NoteItem from './noteItem';
import { useTheme } from '../themes/themeContext';

const NoteList = ({ notes, onNotePress }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
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