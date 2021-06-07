import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjOne, homeObjThree } from "./Data";

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
	  <HeroSection {...homeObjThree} />
    </>
  );
}

export default Products;
