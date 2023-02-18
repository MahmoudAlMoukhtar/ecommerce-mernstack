import React from "react";
import Products from "../../components/Products";
import Header from "../../common/Navbar";
import MainHeader from "../../components/MainHeader";

const ShopPage = ({addToCart, setNavBarModal}) => {
  return (
    <React.Fragment>
      <MainHeader title="Shopy page" />

      <div id="shop" className="flex flex-col gap-y-0">
        <div>
          <Products addToCart={addToCart} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopPage;
