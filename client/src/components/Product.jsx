import React from "react";
import {useNavigate} from "react-router-dom";

const styles = {
  cardProduct:
    "bg-gray-100 flex flex-col justify-between items-center gap-y-2 sm:w-60 shadow-2xl p-2 rounded-md transtion duration-200",
  btnAddStyle:
    "text-white text-3xl translate-y-8 bg-black py-1 px-3 rounded-full cursor-pointer",
};

const Product = ({product: p}) => {
  const navigate = useNavigate();
  return (
    <div key={p._id} className={styles.cardProduct} id="product">
      <img
        src={p.image}
        alt={p.name}
        className="w-[300px] h-[300px] object-cover"
      />
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 id="title-product" className="font-semibold">
          {p.name}
        </h1>
        <small id="price" className="font-bold text-lg">
          ${p.price}
        </small>
        <button
          onClick={() => navigate(`/${p.category}/${p._id}`)}
          id="btn-add-to-cart"
          className={styles.btnAddStyle}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
