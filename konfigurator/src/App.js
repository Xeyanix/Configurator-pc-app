import React, { useState } from 'react';
import styles from './App.module.scss';
import Filters from './components/Filters/Filters';
import AddProducts from './components/AddProducts/AddProducts';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Motherboards from './common/consts/motherboard';


function App() {
  const [cart, setCart] = useState([]);
  const [selectedMotherboard, setSelectedMotherboard] = useState(Motherboards);
  const [MotherboardsToDisplay, setMotherboardsToDisplay] = useState(selectedMotherboard);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setSelectedMotherboard((prev) => [...prev, product])
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    const productIndex = cart.findIndex((item) => item.id === productId);      // Find the index of the product in the cart
    
    if (productIndex !== -1)        // If the product is in the cart, remove one instance
    {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
    }
  };


  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <Filters
        Motherboards={Motherboards}
        sendfilteredProductsToAppComponent={setMotherboardsToDisplay} />
      <div className={styles.columnsWrapper}>
        <ProductList
          Motherboards={MotherboardsToDisplay}
          dodawanie={addToCart}
        />
        <Cart
          cart={cart}
          removeByRightClick={setCart}
          remove={removeItem}
        />
        {/* <Cpus/> */}
      </div>
    </div >

  );
}


export default App;
