import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './CartWidget.css';

const CartWidget = ({count}) => {
  return (
    <div className='navbar-shopping'>
      <AiOutlineShoppingCart className='navbar-shopping'/>
       <div className='navbar-counter'>
        {count}
      </div>
    </div>
  )
}

export default CartWidget;