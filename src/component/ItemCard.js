import React from "react";
import "./ItemCard";
import "./item.css";

const ItemCard = ({ title, price, cart, addItems, removeItems, addCart }) => {
  return (
    <div className="itemCard">
      <div className="itemDisc">
        <p>{title}</p>
        <p>{title}</p>
      </div>
      <div className="itemAction">
        <p>{price}</p>
        <div>
          {!cart ? (
            <button style={{ width: 70 }} onClick={() => addCart()}>
              Add
            </button>
          ) : (
            <div className="itemBtn">
              <button style={{ width: 30 }} onClick={() => addItems()}>
                +
              </button>{" "}
              <button style={{ width: 30 }} onClick={() => removeItems()}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
