import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler = () => {
  //   if (cartIsShown === false) {
  //     setCartIsShown(true);
  //     console.log("show Cart");
  //   } else if (cartIsShown === true) {
  //     setCartIsShown(false);
  //     console.log("close Cart");
  //   }
  // };
  const showCartHandler = () => {
    console.log("show");
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    console.log("close");
    setCartIsShown(false);
  };

  // const cartShow = cartIsShown && <Cart onCloseCart={closeCartHandler} />
  // const cartShow = cartShown ? <Cart onCartButton={cartButtonHandler} /> : <></>;

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onCloseCart={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
