import React from "react";

//Import Components
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import InfoBox from "../../components/InfoBox";
import Footer from "../../components/Footer";

import { SliderData } from "../../data/SliderData";
import NewsLetter from "../../components/NewsLetter";

import "./home.css";

function Home() {
  return (
    <>
      <Hero slides={SliderData} />

      <div className="product-list-container">
        <div className="product-list-with-title">
          <h2 className="list-header">Trending Products</h2>
          <ProductList />
        </div>
      </div>

      <div className="product-list-container">
        <div className="product-list-with-title">
          <h2 className="list-header">New Arrivals</h2>
          <ProductList />
        </div>
      </div>

      <br />
      <InfoBox className="infobox" />

      <div className="product-list-container">
        <div className="product-list-with-title">
          <h2 className="list-header">On Discount</h2>
          <ProductList />
        </div>
      </div>
      <NewsLetter />
      <br />
      <Footer />
    </>
  );
}

export default Home;
