import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from "@mui/material/Button";
import { useAuth } from "../../context/Context";
import styles from "../../common/styles/UserPage.module.scss";
import UserForm from "../UserForm/UserForm";

function UserPage({ tooltip1, tooltip2 }) {
  const [isTooltipVisible, setTooltipVisibility] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(1);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  
  const { user, logout, setUser } = useAuth();
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

  useEffect(() => {
    // Odczytaj dane logowania z session Storage
    const storedUser = window.sessionStorage.getItem("user");
    if (storedUser) {
      const { userfirstName, userLastName } = JSON.parse(storedUser);
      // Zapisz dane logowania w stanie komponentu
      setLoggedInUserData({ userfirstName, userLastName });
      // setUser({ userfirstName, userLastName });
      console.log(`Zalogowany jako: ${userfirstName} ${userLastName}`);
    }




  }, []);

  const handleLogout = () => {
    window.sessionStorage.removeItem("user");
    setLoggedInUserData(null);
    // logout();
    console.log("Użytkownik został wylogowany");
  }

  return (
    <div className={styles.mainContainer}>
      {loggedInUserData ? (
        //  {/* {user ? ( */}
        <div>
          <p>Zalogowany jako: {loggedInUserData.userfirstName} {loggedInUserData.userLastName}</p>
          <Link to="/LoginPage">
            <Button variant="contained" color="error" onClick={handleLogout}>
              Wyloguj
            </Button>
          </Link>
          <div
            className={styles.tooltip}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            title={!isTooltipVisible ? (activeTooltip === 1 ? tooltip1 : tooltip2) : 'Podpowiedz'}
          >
          </div>
          <h3>
            Witaj na swojej stronie użytkownika! Tutaj możesz zarządzać swoim kontem oraz korzystać z różnych funkcji.
          </h3>
          <h2>Profil Twojego Konta</h2>
          <UserForm loggedInUser={loggedInUser} />
        </div>
      ) : (
        <div>
          <p>Nie jesteś zalogowany.</p>
          <Link to="/configurator">
            <Button variant="contained" >
              Powrót
            </Button>
          </Link>
        </div>
      )}
      <div>
        {isTooltipVisible && (
          <div className={styles.tooltip}>
            {activeTooltip === 1 ? tooltip1 : tooltip2} Dzięki ze najechałeś - chyba działa
          </div>
        )}
        (Najedz żeby zobaczyć podpowiedz)
      </div>
    </div>
  );
}

export default UserPage;

//po klikneicu powrot resetuje sie pamiec w aplikacji i nie poakzuje stanu ze ktos jest zalogowany 
