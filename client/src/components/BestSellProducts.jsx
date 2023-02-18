import React from "react";
import Spinner from "../Spinner";
import useFetch from "../services/useFetch";
// import {useNavigate} from "react-router-dom";
import PageNotFound from "../PageNotFound";
import {Link} from "react-router-dom";
import Product from "./Product";
import {useProducts} from "../context/ProductsContext";

function BestSellProducts({numStartSlice = 0, numEndSlice = 3}) {
  const {data: products, loading, error} = useProducts();

  if (error) throw error;
  if (loading) return <Spinner />;

  const productsSort = products.sort((a, b) => {
    if (a.numberSell > b.numberSell) {
      return -1;
    } else if (a.numberSell < b.numberSell) {
      return 1;
    } else {
      return 0;
    }
  });
  const productsSlice = productsSort.slice(numStartSlice, numEndSlice);
  if (products.length === 0) return;
  return (
    <section className="contanier flex flex-col xl:flex-row md:justify-between  items-center gap-4 px-8 xl:px-16 mt-40">
      <div
        id="text-section"
        className="flex flex-col items-center justify-center text-center xl:items-start xl:justify-start xl:text-start gap-y-6 w-full"
      >
        <h3 className="text-3xl font-medium">
          Crafted with excellent material.
        </h3>
        <p className="text-gray-400">
          Donec vitae odio nisl daplibus malesuda. Nullam ac aliqute velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique
        </p>
        <div>
          <button className="bg-black py-2 px-7 rounded-full font-semibold text-white">
            Explore
          </button>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center w-[100%]">
        {productsSlice.map(p => (
          <Product product={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}
export default BestSellProducts;
