import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import styles from "../common/styles/LoginPage.module.scss";
import { useAuth } from "../context/Context";
import Footer from "./Footer";
import ResponsiveAppBar from "./ResponsiveAppBar";

function LoginPage() {
  let navigate = useNavigate();
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const { login } = useAuth();

  const signInUser = (e) => {
    e.preventDefault();
    const fullName = `${userFirstName} ${userLastName}`;

    login(fullName);
    console.log(`Zalogowany jako: ${userFirstName} ${userLastName}`);

    setUserFirstName("");
    setUserLastName(""); // Czyszczenie stanu

    setTimeout(() => {
      setShowLoginMessage(true);
      setTimeout(() => {
        setShowLoginMessage(false);
        navigate(`/UserPage?user=${fullName}`);
      }, 1000);
    }, 100);
  };

  return (
    <div>
      <ResponsiveAppBar />
      <form className={styles.loginPageWrapper} onSubmit={signInUser}>
        <Box sx={{ m: 2 }}>
          <TextField
            margin="dense"
            id="outlined-basic"
            label="First name"
            variant="outlined"
            value={userFirstName}
            onChange={(event) => setUserFirstName(event.target.value)}
          />
        </Box>
        <Box sx={{ m: 2 }}>
          <TextField
            margin="dense"
            id="outlined-basic"
            label="Last name"
            variant="outlined"
            value={userLastName}
            onChange={(event) => setUserLastName(event.target.value)}
          />
        </Box>
        <Box sx={{ m: 2 }}>
          <Button
            disabled={!userFirstName || !userLastName}
            variant="contained"
            type="submit"
            color="success"
          >
            Zaloguj się
          </Button>
        </Box>
        <Link to="/">
          <Button variant="contained">Strona Główna</Button>
        </Link>
        <Link to="/configurator">
          <Button variant="contained">Konfigurator</Button>
        </Link>
        <Link to="/">
          <Button variant="contained">Powrót</Button>
        </Link>
      </form>

      {showLoginMessage && (
        <div className={styles.loginMessage}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Zostałeś zalogowany! Zaraz nastąpi przekierowanie...
          </Alert>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default LoginPage;
