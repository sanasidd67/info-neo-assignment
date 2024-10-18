
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/header/index';
import HeroCrausel from './components/carousel/index';
import Cards from './components/cards/index';
import Swiper from './components/swiper/index';
import Footer from './components/footer/index';
import Graph from './components/graph/index';
import CardSlider from './components/cardSlider/index';

import 'animate.css';

function App() {
  return (
    <>
    <Header/>
    <HeroCrausel/>
    <Cards/>
    <Graph/>
    <CardSlider/>
    <Swiper/>
    <Footer/>
    
    </>
  );
}

export default App;
