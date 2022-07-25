import React from "react";
import { useCartContext } from "../../context/cart-context";
import "../../App.css";
import ItemListContainer from "../../components/ItemListContainer";




const CheckOut = () => {
  const context = useCartContext();
  return (
    <>
      <ItemListContainer className="services" greetig="Saludos" />
      {context.counter}
      
    </>
  )
}

export default CheckOut


 