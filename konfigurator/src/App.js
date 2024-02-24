import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Filters from './components/Filters/Filters';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import ProductList from './components/ProductList/ProductList';
import DownMenu from './components/DownMenu/DownMenu';
import Cart from './components/Cart/Cart';
import LastViewed from './components/LastViewed/LastViewed';
import Contact from './components/Contact/Contact';
import { AuthProvider, useAuth } from './context/Context';
import Header from "./components/Header/Header";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedMotherboard, setSelectedMotherboard] = useState(null);
  const [MotherboardsToDisplay, setMotherboardsToDisplay] = useState([]);
  const [listViewed, setListViewed] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { login, loggedInUser } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (loggedInUser) {
      login(loggedInUser);
    }
  }, [scrollPosition, loggedInUser, login]);

  useEffect(() => {
    fetchMotherboards(); // Wywołanie funkcji pobierającej po załadowaniu strony
  }, []); // Pusta zależność sprawia, że useEffect wywoła się tylko raz, po zamontowaniu komponentu

  const fetchMotherboards = () => {
    fetch('http://localhost:8000/products/motherboards')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMotherboardsToDisplay(data);
      })
      .catch(error => {
        console.error('Error fetching Motherboards:', error);
        // Możesz dodać kod obsługi błędów, np. ustawienie stanu na pustą tablicę lub wyświetlenie komunikatu dla użytkownika
      });
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setListViewed((prev) => [...prev, product]);
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const removeAllItems = () => {
    setCart([]);
  };

  return (
    <AuthProvider>
      <div>
        <div className={styles.appWrapper}>
          <ResponsiveAppBar loggedInUser={loggedInUser} />
          <Header />
          <Filters
            Motherboards={MotherboardsToDisplay}
            sendfilteredProductsToAppComponent={setMotherboardsToDisplay}
          />
          <div className={styles.columnsWrapper}>
            <ProductList
              products={MotherboardsToDisplay}
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
            <LastViewed cart={listViewed} />
            <Contact id="kontakt" />
          </div>
        </div>
        <footer>
          <DownMenu />
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
