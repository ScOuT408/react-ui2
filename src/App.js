import React from "react";
import Company from "./components/Company";
import Credit from "./components/Credit";
import Grow from "./components/Grow";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Company />
      <Service />
      <Works />
      <Pricing />
      <Grow />
      <Credit />
    </>
  );
}

export default App;
