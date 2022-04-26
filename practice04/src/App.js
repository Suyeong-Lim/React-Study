import Cart from "components/Cart/Cart";
import Header from "components/Layout/Header";
import Meals from "components/Meal/Meals";
import React, { useState } from "react";
import CartProvider from "store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showModal = () => {
    setCartIsShown(true);
  };

  const hideModal = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onClick={showModal} />
      {cartIsShown && <Cart onClose={hideModal} />}
      <Meals />
    </CartProvider>
  );
}

export default App;
