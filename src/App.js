import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import ImgSlider from './components/ImgSlider';
import ProductList from './components/ProductList';
import InfoBox from './components/InfoBox';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <ImgSlider />
      <h2 className="list-header">Trending Products</h2>
      <ProductList />
      <h2 className="list-header">New Arrivals</h2>

      <ProductList />
      <br />
      <InfoBox className="infobox" />
      <h2 className="list-header">On Discount</h2>
      <ProductList />


      <br />
      <Footer />
    </>
  )
}

export default App;
