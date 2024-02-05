// NoteDetailsScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const NoteDetailsScreen = () => {
  const route = useRoute();
  const { note } = route.params;

  return (
    <View>
      <Text>Title: {note.title}</Text>
      <Text>Content: {note.content}</Text>
      {/* Add other note details as needed */}
    </View>
  );
};

export default NoteDetailsScreen;
