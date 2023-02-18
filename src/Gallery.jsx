import GalleryImg from "./GalleryImg";

export default function Gallery({ size, type }) {
  return (
    <section>
      <h2>Amazing Gallery</h2>

      <div className="gallery">
        <ul className="gallery-list">
          {[...Array(size).keys()].map((x, i) => (
            <li key={i}>
              <GalleryImg randomType={type[i]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
