import React from "react";

//Import Components
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import InfoBox from "../../components/InfoBox";
import Footer from "../../components/Footer";

import { SliderData } from "../../data/SliderData";
import NewsLetter from "../../components/NewsLetter";

import "./home.css";
import Categories from "../../components/Categories";

function Home() {
  return (
    <>
      <Hero slides={SliderData} />
      <Categories />

      <div className="product-list-container">
        <div className="product-list-with-title">
          <h2 className="list-header">Trending Products</h2>
          <ProductList param={"?categories=615886974d598100165656a7"} />
        </div>
      </div>

      <div className="product-list-container">
        <div className="product-list-with-title">
          <h2 className="list-header">Top Jersey</h2>
          <ProductList param={"?categories=6138e7c3c143fa3c74d5e2ea"} />
        </div>
      </div>

      <br />
      <InfoBox className="infobox" />

      <div className="product-list-container">
        <div className="product-list-with-title">
          <h2 className="list-header">Best Offers</h2>
          <ProductList param={"?categories=615886974d598100165656a7"} />
        </div>
      </div>
      <NewsLetter />
      <br />
      <Footer />
    </>
  );
}

export default Home;
