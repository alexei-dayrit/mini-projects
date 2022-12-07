import PocketBase from 'pocketbase';

async function getNotes() {
  const db = new PocketBase('http://127.0.0.1:8090');
  const records = await db.collection('notes').getList(1, 25);
  return records?.items as any[]
}

export default async function NotesPage() {
  const notes = await getNotes()
  return (
    <div>
      <h1>Notes Page</h1>
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
