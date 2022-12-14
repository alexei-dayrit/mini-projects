'use client';

import { useState } from 'react';

export default function CreateNote() {
  const [newNote, setNewNote] = useState({
    title: '',
    content: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewNote({
      ...newNote,
      [name]: value
    });
  };

  return (
    <form>
      <h1>Create a new note</h1>
      <input
        type="text"
        placeholder="Title"
        name='title'
        value={newNote.title}
        onChange={handleChange}
      />
    </form>
  );
}
