import React from "react";
import { Img } from "ui/common";
import { MainSection } from "ui/layout";
import  shoppingBag  from "../shoppingBag.jpg";

export function Home() {
  return (
    <MainSection heading="Start Shopping...">
      <Img src={shoppingBag} alt="shoppingBag"></Img>
    </MainSection>
  );
}

export default Home;