const Note = ({ id, note }) => {
  console.log("hello", note.content);
  return <li key={id}>{note.content}</li>;
};

export default Note;
