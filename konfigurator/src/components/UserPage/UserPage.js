import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import styles from "./UserPage.module.scss";

function UserPage() {

  return (
    <div className={styles.mainContainer}>
      Zostałes zalogowany
      <Link to="/configurator">
        <Button variant="contained" color="success">
          Wyloguj
        </Button>
      </Link>
    </div>
  );
}

export default UserPage;
