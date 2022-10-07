import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Products from "./components/products/products";
import Slider from "./components/slider/slider";
import Suggestions from "./components/suggestions/suggestions";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slider />
      <Products />
      <Suggestions />
    </div>
  );
};

export default App;
