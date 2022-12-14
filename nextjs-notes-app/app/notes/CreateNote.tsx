'use client';

import { useState } from 'react';

interface formEvent {
  target: {
    value: string;
    name: string;
  }
}

export default function CreateNote() {
  const [newNote, setNewNote] = useState({
    title: '',
    content: ''
  });

  const handleChange = (event: formEvent) => {
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
        name="title"
        value={newNote.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Content..."
        value={newNote.content}
        onChange={handleChange}
      />
    </form>
  );
}
