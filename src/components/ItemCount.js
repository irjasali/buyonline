import React from 'react';

const ItemCount = ({stock, initial}) => {
  return (
    <div>
        <div>
          <button>-</button>
          <p>0</p>
          <button>+</button>
        </div>
        <div>
          <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ItemCount; 