import React from "react";
import "../../App.css";
import { useCartContext } from "../../context/cart-context";

export default function Services() {
  const context = useCartContext();

  return <h1 className="services">SERVICES {context.counter}</h1>;
}
