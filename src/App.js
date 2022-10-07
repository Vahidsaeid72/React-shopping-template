import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MostPopular from "./components/mostPopular/mostPopular";
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
      <MostPopular />
      <Footer />
    </div>
  );
};

export default App;
