import PocketBase from 'pocketbase';

export const revalidate = 10;

async function getNote(noteId: string) {
  const db = new PocketBase('http://127.0.0.1:8090');
  const records = await db.collection('notes').getOne(noteId);
  return records;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id)
  const { id, title, content, created } = note;

  return (
    <div>
      <h1>notes/{id}</h1>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </div>
  )
}
