import React from "react";

const Cart = ({ removeCart, title, price, count, addItems, removeItems }) => {
  return (
    <div
      style={{
        width: 650,
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4,
      }}
    >
      <button style={{ width: 30 }} onClick={() => removeCart()}>
        x
      </button>
      <p>{title}</p>
      <p>{`${count} * ${price}`}</p>
      <div style={{ width: 100 }}>
        <p>{count * price}</p>
      </div>
      <div style={{ width: 70 }}>
        <button style={{ width: 30 }} onClick={() => addItems()}>
          +
        </button>{" "}
        <button style={{ width: 30 }} onClick={() => removeItems()}>
          -
        </button>
      </div>
    </div>
  );
};

export default Cart;
