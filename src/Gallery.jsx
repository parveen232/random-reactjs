import GalleryImg from "./GalleryImg";

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Gallery</h1>
      <div className="gallery">
        <GalleryImg />
        <GalleryImg />
        <GalleryImg />
        <GalleryImg />
        <GalleryImg />
      </div>
    </section>
  );
}
