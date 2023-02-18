import GalleryImg from "./GalleryImg";

export default function Gallery({ size, type }) {
  return (
    <section className="gallery">
      <h2>Amazing Gallery</h2>

      <div>
        <ul className="gallery-list">
          {[...Array(size).keys()].map((x, i) => (
            <li key={i}>
              <GalleryImg randomType={type[i < 5 ? i : i%5]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
