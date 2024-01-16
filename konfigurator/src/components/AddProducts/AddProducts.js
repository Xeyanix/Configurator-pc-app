import React from "react";
import styles from '../../common/styles/Columns.module.scss';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function AddProducts() {

  return (
    <div className={styles.wrapper}>
      <h1>PC Configurator</h1>
      <div className={styles.mainPageButton}>
        <Link to="/">
          <Button variant="contained" color="success">
            Strona Główna
          </Button>
        </Link>
        <Link to="/LoginPage">
        <Button variant="contained">
          Zaloguj
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default AddProducts;
