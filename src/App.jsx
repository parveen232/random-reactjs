import Carousel from "./Carousel";
import CurrentDate from "./CurrentDate";
import FilterList from "./FilterList";
import Gallery from "./Gallery";
import GallerySizeForm from "./GallerySizeForm";
import List from "./List";

export default function App() {
  const type = ["nature", "space", "history", "architecture", "furniture"];

  return (
    <div>
      <h1>Random ReactJS</h1>
      <CurrentDate />
      <Carousel />
      <GallerySizeForm />
      <Gallery size={7} type={type} />
      <FilterList />
      <List type={type} />
    </div>
  );
}
