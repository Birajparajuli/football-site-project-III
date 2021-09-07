import React from "react";

//Import Components
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import InfoBox from "../components/InfoBox";
import Footer from "../components/Footer";

import { SliderData } from "../data/SliderData";
function homepage() {
  return (
    <>
      <Hero slides={SliderData} />
      {/* <ImgSlider /> */}
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
  );
}

export default homepage;
