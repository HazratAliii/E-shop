import React from "react";
import Topbar from "../../topbar/Topbar";
import Carousel from "../../carousel/Carousel";
import Categories from "../../categories/Categories";
import SecondTopbar from "../../secondTopbar/SecondTopbar";
export default function Home() {
  return (
    <>
      <Topbar />
      <SecondTopbar />
      <Carousel />
      <Categories />
    </>
  );
}
