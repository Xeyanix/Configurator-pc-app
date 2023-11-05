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
