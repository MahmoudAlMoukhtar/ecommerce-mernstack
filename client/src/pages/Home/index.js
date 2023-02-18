import React from "react";
import Blogs from "../../components/Blogs";
import ProductsSlider from "../../components/ProductsSlider";
import Testimonailas from "../../components/Testimonailas";
import WhyChoose from "../../components/WhyChose";
import BestSellProducts from "../../components/BestSellProducts";
import Services from "../../components/Services";
import MainHeader from "../../components/MainHeader";

const HomePage = () => {
  return (
    <React.Fragment>
      <MainHeader title="Welcome to our store" />
      <div className="flex flex-col gap-40 w-full">
        <BestSellProducts numStartSlice={0} numEndSlice={3} />
        <WhyChoose />
        <Services />
        <Testimonailas />
        <Blogs />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
