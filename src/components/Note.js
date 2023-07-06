const Note = ({ content, id }) => {
  console.log("hello", content);
  return <li key={id}>{content}</li>;
};

export default Note;
