import { useState } from "react";
import "./App.css";
import Cart from "./component/Cart";
import Item from "./component/ItemCard";

const API = [
  {
    id: 0,
    title: "item_0",
    price: 1000,
    count: 0,
    cart: false,
  },
  {
    id: 1,
    title: "item_1",
    price: 2000,
    count: 0,
    cart: false,
  },
  {
    id: 2,
    title: "item_2",
    price: 3000,
    count: 0,
    cart: false,
  },
  {
    id: 3,
    title: "item_3",
    price: 4000,
    count: 0,
    cart: false,
  },
  {
    id: 4,
    title: "item_4",
    price: 5000,
    count: 0,
    cart: false,
  },
  {
    id: 5,
    title: "item_5",
    price: 6000,
    count: 0,
    cart: false,
  },
];

function App() {
  const [items, setItems] = useState(API);

  const addCart = (e) => {
    console.log(e);
    console.log(items);
    setItems((state) => {
      const tempItem = [...state];
      return [
        ...tempItem,
        tempItem.map((x) => {
          const temp = x;
          if (temp.id === e.id) {
            temp.cart = true;
            temp.count = temp.count + 1;
          }
          return temp;
        }),
      ];
    });
  };

  const removeCart = (e) => {
    console.log(e);
    setItems((state) => {
      const tempItem = [...state];
      return [
        ...tempItem,
        tempItem.map((x) => {
          const temp = x;
          if (temp.id === e.id) {
            temp.cart = temp.count === 0 ? true : false;
            temp.count = temp.count - 1;
          }
          return temp;
        }),
      ];
    });
  };

  const addItems = (e) => {
    console.log(e);
    setItems((state) => {
      const tempItem = [...state];
      return [
        ...tempItem,
        tempItem.map((x) => {
          const temp = x;
          if (temp.id === e.id) {
            temp.cart = true;
            temp.count = temp.count + 1;
          }
          return temp;
        }),
      ];
    });
  };

  const removeItems = (e) => {
    console.log(e);
    setItems((state) => {
      const tempItem = [...state];
      return [
        ...tempItem,
        tempItem.map((x) => {
          const temp = x;
          if (temp.id === e.id) {
            temp.cart = temp.count === 0 ? true : false;
            temp.count = temp.count - 1;
          }
          return temp;
        }),
      ];
    });
  };

  const clearAll = () => {
    setItems((state) => {
      const tempItem = [...state];
      return [
        ...tempItem,
        tempItem.map((x) => {
          const temp = x;
          temp.cart = false;
          temp.count = 0;
          return temp;
        }),
      ];
    });
  };

  return (
    <>
      <div style={{ width: "100%", textAlign: "center" }}>
        <p style={{ fontSize: 40, fontWeight: 800 }}>GAMES STORE</p>
      </div>
      <div className="App">
        <div className="itemsContainer">
          {API.map((x) => {
            return (
              <Item
                key={x.id}
                title={x.title}
                price={x.price}
                cart={x.cart}
                addCart={() => addCart(x)}
                addItems={() => addItems(x)}
                removeItems={() => removeItems(x)}
              />
            );
          })}
          <div style={{ width: 650, textAlign: "center", padding: 10 }}>
            <p>fsidufhiughsi ufghniughniughe irheriootuehr ouehteoiru</p>
          </div>

          {items
            .filter((x) => x.cart === true)
            .map((x) => {
              return (
                <Cart
                  key={x.id}
                  price={x.price}
                  count={x.count}
                  title={x.title}
                  removeCart={() => removeCart(x)}
                  addItems={() => addItems(x)}
                  removeItems={() => removeItems(x)}
                />
              );
            })}
          <div style={{ height: 1, backgroundColor: "#fff", width: 650 }}></div>
          <div
            style={{
              display: "flex",
              width: 650,
              justifyContent: "space-between",
              padding: 10,
              paddingLeft: 120,
            }}
          >
            <p>Total</p>
            <p> Items : {items.filter((x) => x.cart === true).length} </p>
            <div style={{ width: 80 }}>
              <p>
                {items
                  .filter((x) => x.cart === true)
                  .map((x) => x.price * x.count)
                  .reduce((x, a) => x + a, 0)}
              </p>
            </div>
            <button style={{ width: 100 }} onClick={() => clearAll()}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
