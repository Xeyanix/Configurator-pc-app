import React from 'react';
import { useState } from "react";
import AddProducts from './components/AddProducts/AddProducts';
// import Compatibility from './components/Compatibility/Compatibility';
import ProductList from './components/ProductList/ProductList';
import SelectedComponents from './components/SelectedComponents/SelectedComponents';
import Filters from './components/Filters/Filters';
import Motherboards from './common/consts/motherboard';
import styles from './App.module.scss';

function App() {
  const [selectedMotherboard, setSelectedMotherboard] = useState(Motherboards);
  const [SelectedComponent, setSelectedComponent] = useState([]);
  const [MotherboardsToDisplay, setMotherboardsToDisplay] = useState(selectedMotherboard);

  const addToSelectedComponents = (product) => {
    setSelectedComponent((state) => [...state, { ...product, id: Math.random(), isClicked: false },
    ]);
    setSelectedMotherboard((prev) => [...prev, product]) //zeby było klikane bez opóźnienia
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <Filters 
      Motherboards={Motherboards}
        sendfilteredProductsToAppComponent={setMotherboardsToDisplay} />
      {/* <Compatibility /> */}
      <div className={styles.columnsWrapper}>
        <ProductList
          Motherboards={MotherboardsToDisplay}
          dodawanie={addToSelectedComponents}
          />
        <SelectedComponents
        selectedPrice={SelectedComponent}
          SelectedItems={SelectedComponent}
          remove={setSelectedComponent}
        />

      </div>
    </div>
  );
}

export default App;
