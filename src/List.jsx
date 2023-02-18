export default function List({ type }) {
  return (
    <div className="list">
      <h2>List of image types for Gallery</h2>
      <ol>
        {type.map((x, i) => (
          <li className="list-item" key={i}>{x}</li>
        ))}
      </ol>
    </div>
  );
}
