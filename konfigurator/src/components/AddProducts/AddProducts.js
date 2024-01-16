import React from "react";
import styles from '../../common/styles/Columns.module.scss';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function AddProducts() {
  
  return (
    <div className={styles.wrapper}>
      <h1>PC Configurator</h1>
    
      <Link to="/">
        <Button variant="contained" color="error">
          Wyloguj
        </Button>
      </Link>
      <Button color="error">
          Zaloguj się
        </Button>
    </div>
  );
}

export default AddProducts;
