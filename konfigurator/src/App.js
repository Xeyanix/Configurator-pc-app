import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Filters from './components/Filters/Filters';
import AppBar from './components/AppBar/AppBar';
import ProductList from './components/ProductList/ProductList';
import Scroll from './components/Scroll/Scroll';
import Cart from './components/Cart/Cart';
import Motherboards from './common/consts/motherboard';
import LastViewed from './components/LastViewed/LastViewed';
import Contact from './components/Contact/Contact';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedMotherboard, setSelectedMotherboard] = useState(Motherboards);
  const [MotherboardsToDisplay, setMotherboardsToDisplay] = useState(selectedMotherboard);
  const [listViewed, setListViewed] = useState([]); // Użyj osobnego stanu dla listy ostatnio oglądanych

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [scrollPosition]);

 

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setSelectedMotherboard((prev) => [...prev, product])
    setListViewed((prev) => [...prev, product]);
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    const productIndex = cart.findIndex((item) => item.id === productId);      // Find the index of the product in the cart
    // If the product is in the cart, remove one instance
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
    }
  };

  const removeAllItems = () => {
    // implement logic to remove all items from the cart
    setCart([]);
  };

  return (
    <div>
      <div className={styles.appWrapper}>
        <AppBar />
        <Filters
          Motherboards={Motherboards}
          sendfilteredProductsToAppComponent={setMotherboardsToDisplay}
        />
        <div className={styles.columnsWrapper}>
          <ProductList
            Motherboards={MotherboardsToDisplay}
            dodawanie={addToCart}
          />
          <Cart
            cart={cart}
            removeByRightClick={setCart}
            remove={removeItem}
            removeAll={removeAllItems}
          />
        </div>
        <div>
          <LastViewed
            cart={listViewed}
          />
          <Contact
          id="kontakt"
          />
          <Scroll/>
        </div>
      </div >
    </div >
  );
}

export default App;


