import React, { useState } from 'react';
import { View, StyleSheet, Button} from 'react-native';
import NoteList from '../src/NoteList';
import AddNoteForm from '../src/addNoteForm';
import { useTheme } from '../themes/themeContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNotes } from '../src/notesContext';

const TakeNoteScreen = (navigation) => {
    const { addNote } = useNotes();
    const { theme } = useTheme();
    const [notes, setNotes] = useState([]);

    const handleAddNote = (newNote) => {
        addNote(newNote);
        //setNotes([...notes, newNote]);
        //console.log('note was added: ', useNotes().notes)
      };

      return(
        <AddNoteForm onAddNote={handleAddNote} />
      );
}

export default TakeNoteScreen;
