import Carousel from "./Components/Carousel";
import CurrentDate from "./Components/CurrentDate";
import FilterList from "./Components/FilterList";
import Gallery from "./Components/Gallery/Gallery";
// import GallerySizeForm from "./Components/Gallery/GallerySizeForm";
import List from "./Components/List";

export default function App() {
  const type = ["nature", "space", "history", "architecture", "furniture"];

  return (
    <div>
      <h1>Random ReactJS</h1>
      <CurrentDate />
      <Carousel />
      <Gallery size={7} type={type} />
      <FilterList />
      <List type={type} />
    </div>
  );
}
