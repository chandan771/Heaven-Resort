import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Offers from './components/offers/Offers';
import Plan from './components/plan/Plan';
import Rooms from './components/rooms/Rooms';
import ImageSlider from './components/imageSlider/ImageSlider';
import Footer from './components/footer/Footer';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Hero />

      <Offers />

      <Plan />

      <Rooms />

      <ImageSlider />

      <Footer />
    </>
  );
}

export default App;
