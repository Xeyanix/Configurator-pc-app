import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import styles from "./UserPage.module.scss";
import { useState } from "react";
import UserForm from "../UserForm/UserForm";

function UserPage({ tooltip1, tooltip2, loggedInUser }) {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const [isTooltipVisible, setTooltipVisibility] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(1);

  const handleMouseEnter = () => {
    setTooltipVisibility(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisibility(false);
  };

  const toggleTooltip = () => {
    setActiveTooltip((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <div className={styles.mainContainer}>
      {loggedInUser && (
        <div className={styles.loggedInMessage}>
          Zalogowany jako: {loggedInUser}


          {`${currentUser.userfirstName} ${currentUser.userLastName}`}
        </div>
      )}

      <Link to="/LoginPage">
        <Button variant="contained" color="error">
          Wyloguj
        </Button>
      </Link>
      <div
        className={styles.tooltip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title={!isTooltipVisible ? (activeTooltip === 1 ? tooltip1 : tooltip2) : 'Podpowiedz'}
      >
        {isTooltipVisible && (
          <div className={styles.tooltip}>
            {activeTooltip === 1 ? tooltip1 : tooltip2} Dzięki ze najechałeś - chyba działa
          </div>
        )}
        Najedz zeby zobaczyć podpowiedz
        <div>
        </div>


      </div>
      Witaj na swojej stronie użytkownika! Tutaj możesz zarządzać swoim kontem oraz korzystać z różnych funkcji.
      <h2>Profil Twojego Konta</h2>
      <UserForm />
    </div>

  );
}

export default UserPage;

