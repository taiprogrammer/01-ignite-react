export function Post({ author, subscription }) {
  return (
    <div>
      <h1>{author}</h1>
      <p>{subscription}</p>
    </div>
  );
}
