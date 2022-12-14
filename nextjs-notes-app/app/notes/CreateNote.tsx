'use client';

import { useState } from 'react';

interface formEvent {
  target: {
    value: string;
    name: string;
  };
}

const formDefault = {
  title: '',
  content: ''
};

export default function CreateNote() {
  const [newNote, setNewNote] = useState(formDefault);

  const handleChange = (event: formEvent) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewNote({
      ...newNote,
      [name]: value
    });
  };

  const handleSubmit = async (event: any) => {
    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    });
    setNewNote(formDefault)
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add note</button>
    </form>
  );
}
