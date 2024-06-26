import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { useAuth } from "../context/Context";
import styles from "../common/styles/UserPage.module.scss";
import UserForm from "../components/UserForm";
import { Navigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Footer from "./Footer";
import ResponsiveAppBar from "./ResponsiveAppBar";

function UserPage() {
  const { loggedInUser, logout } = useAuth();
  const userExist = localStorage.getItem("user");

  useEffect(() => {
    if (loggedInUser) {
      console.log("Zalogowany użytkownik:", loggedInUser);
    }
  }, [loggedInUser]);

  const handleLogout = () => {
    window.sessionStorage.removeItem("user");
    logout();
    console.log("Użytkownik został wylogowany");
  }

  return (
    <div className={styles.Box}>
      <ResponsiveAppBar />

      <main>
        <div className={styles.mainContainer}>
          {loggedInUser ? (
            <div>
              <Alert className={styles.alert} icon={<CheckIcon fontSize="inherit" />} severity="success">
                Zalogowany jako: {loggedInUser}
              </Alert>
              <Link to="/LoginPage">
                <Button variant="contained" color="error" onClick={handleLogout}>
                  Wyloguj
                </Button>
              </Link>
              <div
                className={styles.tooltip}

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
              <Alert
                severity="error">
                Nie jesteś zalogowany.
              </Alert>
              <Link to="/configurator">
                <Button variant="contained" >
                  Powrót
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div>
          <div>
            <Footer />
          </div>
        </div>
      </main >
    </div >
  );
}

export default UserPage;
