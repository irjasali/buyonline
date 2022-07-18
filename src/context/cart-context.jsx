import React, { createContext, useCallback, useContext, useState } from "react";

const CartContext = createContext({});

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) return null;

  return context;
};

export const useAddToCart = () => {
  const { addToCart } = useCartContext();

  return addToCart;
};

export const useCartItemCounter = () => {
  const { counter } = useCartContext();

  return counter;
};

export const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);

  const addToCart = useCallback(
    (item) => {
      console.log("click", item);
      setCounter(counter + 1);
      setProducts([...products, item]);
      console.log(counter, products);
    },
    [counter, products]
  );

  const removeFromCart = useCallback(() => {
    console.log("Eliminando del carrito");
    setCounter(counter - 1);
    console.log(counter);
  }, [counter]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        counter,
        productsTotal: products.length
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
