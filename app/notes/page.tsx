'use client'

import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import { getNotesFromLocalStorage, saveNotesToLocalStorage } from '../utils/localStorage'; 

// Define the interface for a note object
interface Note {
  title: string;
  content: string;
}

// Main component for displaying and managing notes
export default function Notes() {
  // State for storing the list of notes
  const [notes, setNotes] = useState<Note[]>([]);
  // State for storing the title of the new note being created
  const [newNoteTitle, setNewNoteTitle] = useState('');

  // Load notes from local storage when the component mounts
  useEffect(() => {
    // Get notes from local storage
    const savedNotes = getNotesFromLocalStorage();
    // Set the notes state with the loaded notes
    if (savedNotes.length > 0) {
      setNotes(savedNotes);
    }
  }, []); 

  // Function to add a new note to the list
  const addNote = () => {
    if (newNoteTitle.trim() === '') return; // Prevent empty notes

    // Update the notes state using setNotes() to trigger the useEffect
    const updatedNotes = [...notes, { title: newNoteTitle, content: '' }];
    setNotes(updatedNotes);
    // Clear the new note title input
    setNewNoteTitle('');
  };

  // Save notes to local storage whenever the 'notes' state changes
  useEffect(() => {
    if (notes.length > 0) {
      saveNotesToLocalStorage(notes);
    }
  }, [notes]);

  return (
    <main>    
      <Navbar/>
      <div className="container mx-auto p-4"> 
        <h1 className="text-3xl font-bold text-center mb-4">Your Notes</h1>

        {/* Note Creation Form */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
            placeholder="Enter Note Title"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={addNote}
          >
            Add Note
          </button>
        </div>

        {/* Display Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-lg font-medium mb-2">{note.title}</h2>
              <p className="text-gray-600">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Export the Note interface
export type { Note };
