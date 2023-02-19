import CurrentDate from "./CurrentDate";
import FilterList from "./FilterList";
import Gallery from "./Gallery";
import GalleryButton from "./GalleryButton";
import GallerySizeForm from "./GallerySizeForm";
import List from "./List";

export default function App() {
  const type = ["nature", "space", "history", "architecture", "furniture"];

  return (
    <div>
      <h1>Random ReactJS</h1>
      <CurrentDate />
      <List type={type} />
      <GallerySizeForm />
      <GalleryButton />
      <Gallery size={7} type={type} />
      <FilterList />
    </div>
  );
}
