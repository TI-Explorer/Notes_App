// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './themes/themeContext';
import { NotesProvider } from './src/notesContext';
import HomeScreen from './screens/homeScreen';
import TakeNoteScreen from './screens/takeNoteScreen';
import NoteDetailsScreen from './screens/noteDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NotesProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TakeNotesScreen" component={TakeNoteScreen} />
            <Stack.Screen name="NoteDetailsScreen" component={NoteDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotesProvider>
    </ThemeProvider>
  );
}
