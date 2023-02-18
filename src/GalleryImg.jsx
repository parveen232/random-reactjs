export default function NatureImg({ randomType }) {
  const src = `https://source.unsplash.com/random/300x300/?${randomType}`;

  return (
    <div className="gallery-item">
      <h3 className={randomType == "nature" ? "green" : "red"}>
        {randomType[0].toUpperCase() + randomType.slice(1)}
      </h3>
      <img src={src} alt="Nature" />
    </div>
  );
}
