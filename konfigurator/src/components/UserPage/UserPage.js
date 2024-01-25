import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import styles from "./UserPage.module.scss";
import { useState } from "react";
import UserForm from "../UserForm/UserForm";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

function UserPage({ tooltip1, tooltip2 }) {
  const [isTooltipVisible, setTooltipVisibility] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loggedInUser = searchParams.get('user');

  const handleMouseEnter = () => {
    setTooltipVisibility(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisibility(false);
  };

  const toggleTooltip = () => {
    setActiveTooltip((prev) => (prev === 1 ? 2 : 1));
  };

  const handleLogout = () => {
    // Wyczyść dane logowania z Local Storage
    window.localStorage.removeItem("user");
    console.log("Użytkownik został wylogowany.");
  };

  useEffect(() => {
    // Odczytaj dane logowania z Local Storage
    const storedUser = window.localStorage.getItem("user");
    if (storedUser) {
      const { userfirstName, userLastName } = JSON.parse(storedUser);
      // Tutaj możesz używać danych logowania, na przykład wyświetlić je w komponencie
      console.log(`Logged jako: ${userfirstName} ${userLastName}`);
    }
  }, []);

  return (
    <div className={styles.mainContainer}>

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
        (Najedz zeby zobaczyć podpowiedz)
        <div>
        </div>


      </div>
      <h3>
        Witaj na swojej stronie użytkownika! Tutaj możesz zarządzać swoim kontem oraz korzystać z różnych funkcji.
      </h3>
      <h2>Profil Twojego Konta</h2>
      <UserForm loggedInUser={loggedInUser} />
    </div>

  );
}

export default UserPage;

