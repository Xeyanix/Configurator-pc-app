import React from 'react';
// import { useState } from "react";
import AddProducts from './components/AddProducts/AddProducts';
import ProductList from './components/ProductList/ProductList';
import SelectedComponents from './components/SelectedComponents/SelectedComponents';
import Filters from './components/Filters/ProductsFilters';
// import Motherboards from './common/consts/motherboard';
import styles from './App.module.scss';

function App() {
 


  return (
    <div className={styles.appWrapper}>
      <Filters />
      <AddProducts

      />
      <div className={styles.columnsWrapper}>
        <ProductList

        />
        <SelectedComponents

        />
      </div>
    </div>
  );
}

export default App;
