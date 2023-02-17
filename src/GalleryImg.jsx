export default function NatureImg() {
  const category = ["nature", "car", "flower", "chair", "table"];
  const randomCategory = category[Math.floor(Math.random() * 5)];
  const src = `https://source.unsplash.com/random/300x300/?${randomCategory}`;

  return (
    <div className="gallery-item">
      <img src={src} alt="Nature" />
    </div>
  );
}
