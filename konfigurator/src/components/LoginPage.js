import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import styles from "../common/styles/LoginPage.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAuth } from "../context/Context";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
<<<<<<< HEAD:konfigurator/src/components/LoginPage.js
import Footer from "./Footer";
import ResponsiveAppBar from "./ResponsiveAppBar";
=======
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865:konfigurator/src/components/LoginPage/LoginPage.js

function LoginPage() {
  let navigate = useNavigate();
  const [userfirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const { login } = useAuth();

  const signInUser = (e) => {
    e.preventDefault();
    const fullName = `${userfirstName} ${userLastName}`;

    login(fullName);
    console.log(`Zalogowany jako: ${userfirstName} ${userLastName}`);

<<<<<<< HEAD:konfigurator/src/components/LoginPage.js
    setUserFirstName(""); 
    setUserLastName(""); // Czyszczenie stanu

=======
    
  setUserFirstName(""); // Czyszczenie stanu
  setUserLastName(""); // Czyszczenie stanu
  
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865:konfigurator/src/components/LoginPage/LoginPage.js
    setTimeout(() => {
      setShowLoginMessage(true);
      setTimeout(() => {
        setShowLoginMessage(false);
<<<<<<< HEAD:konfigurator/src/components/LoginPage.js
        navigate(`/UserPage?user=${fullName}`);
      }, 1000); 
    }, 100); 
=======
        navigate(`/configurator?user=${fullName}`);
      }, 1000); // 1000 milliseconds (1 second)
    }, 100); // 100 milliseconds (0.1 second)
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865:konfigurator/src/components/LoginPage/LoginPage.js
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
            value={userfirstName}
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
            disabled={!userfirstName || !userLastName}
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
<<<<<<< HEAD:konfigurator/src/components/LoginPage.js
          <Button variant="contained">Konfigurator</Button>
=======
          <Button variant="contained">powrót</Button>
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865:konfigurator/src/components/LoginPage/LoginPage.js
        </Link>
      </form>

      {showLoginMessage && (
        <div className={styles.loginMessage}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Zostałeś zalogowany! Zaraz nastąpi przekierowanie...
          </Alert>
        </div>
      )}
<<<<<<< HEAD:konfigurator/src/components/LoginPage.js

      <Footer />
=======
>>>>>>> 0d66f129524f83a39e3186ca792031d25e2a7865:konfigurator/src/components/LoginPage/LoginPage.js
    </div>
  );
}

export default LoginPage;
