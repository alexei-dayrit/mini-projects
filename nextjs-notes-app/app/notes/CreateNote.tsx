'use client'

import { useState } from 'react';

export default function CreateNote() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <div>
      <h1>Create Note</h1>
    </div>
  )
}
