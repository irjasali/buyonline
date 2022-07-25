import React from "react";
import { useCartContext } from "../context/cart-context";

const ItemListContainer = ({greetig}) => {
const context = useCartContext();

  return (
    <>  

    <h1 className="services"> {greetig} {context.counter}</h1>
   

    </>
 );
};

export default ItemListContainer;
