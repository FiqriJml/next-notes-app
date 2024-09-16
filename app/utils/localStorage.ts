// utils/localStorage.ts

import { Note } from "../notes/page";

// Get notes from local storage, or return an empty array if none are found
export function getNotesFromLocalStorage(): Note[] {
  if (typeof window !== 'undefined') {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  }
  return [];
}

// Save notes to local storage as a JSON string
export function saveNotesToLocalStorage(notes: Note[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
