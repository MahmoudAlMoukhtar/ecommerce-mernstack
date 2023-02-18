import React from "react";
import * as api from "../api/index";
import {BsTrash} from "react-icons/bs";

const styles = {
  cardItemCart:
    "cart-item bg-white flex flex-col px-4 sm:flex-row justify-between gap-2 sm:items-center shadow-2xl py-2 transition duration-200 cursor-default	border-2 border-gray-600 font-bold text-sm",
};

const CartItem = ({itemInCart, cartProducts, setCartProducts}) => {
  const {price, name, image, quantity, _id} = itemInCart;
  const handleDeleteProductCart = async () => {
    try {
      const response = await api.deleteProductById(_id);
      console.log(response.data.products);
      setCartProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <li className={styles.cardItemCart}>
      <img
        src={image}
        alt={name}
        className="img-cart-item w-[80] h-80 sm:w-[100px] sm:h-[100px] lg:w-[200px] lg:h-[200px]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-5 my-4 text-sm gap-5 gap-2 text-start sm:text-center font-semibold md:font-bold  text-sm w-[800px]">
        <h3>{name}</h3>
        <p>${price}</p>
        <p>Quantity: {quantity}</p>
        <button className="cursor-pointer" onClick={handleDeleteProductCart}>
          <BsTrash size={25} />
        </button>
      </div>
    </li>
  );
};
export default CartItem;
