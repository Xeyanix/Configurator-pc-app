import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import styles from "./UserPage.module.scss";

function UserPage() {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className={styles.mainContainer}>
      Zostałes zalogowany: {" "}
          {`${currentUser.userfirstName} ${currentUser.userLastName}`}
      <Link to="/LoginPage">
        <Button variant="contained" color="error">
          Wyloguj
        </Button>
      </Link>
    </div>
  );
}

export default UserPage;
