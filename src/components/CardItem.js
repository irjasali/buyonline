import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  const { stock, initial, path, label, src, text, onAdd } = props;
  const [count, setCount] = useState(initial);

  const minusCount = () => {
    count > initial && setCount(count - 1);
  };

  const addCount = () => {
    count < stock && setCount(count + 1);
  };

  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img className="cards__item__img" alt="Travel Image" src={src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
          <div className="counter">
            <button className="btn_shop" onClick={addCount}>
              +
            </button>
            <div className="count">{count}</div>
            <button className="btn_shop" onClick={minusCount}>
              -
            </button>
          </div>
          <div>
            <button
              className="btn_shop--cart"
              onClick={() =>
                onAdd({
                  text,
                  count
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardItem;
