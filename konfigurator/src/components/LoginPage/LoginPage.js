import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import styles from "./LoginPage.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


function LoginPage() {
  let navigate = useNavigate();

  const [userfirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const signInUser = (e) => {
    e.preventDefault();
    window.localStorage.setItem(
      "user",
      JSON.stringify({ userfirstName, userLastName })
    );


    setShowLoginMessage(true);
    setTimeout(() => {
      setShowLoginMessage(false);
      navigate("/UserPage"); 
    }, 2000); // 2000 milliseconds (2 seconds)

  };



  return (
    <div>
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
        <Link to="/configurator">
          <Button
            variant="contained"
          >
            powrót
          </Button>
        </Link>
      </form>

      {showLoginMessage && (
        <div className={styles.loginMessage}>
          Zostałeś zalogowany! Zaraz nastąpi przekierowanie...
        </div>
      )}
    </div>
  );
}

export default LoginPage;
