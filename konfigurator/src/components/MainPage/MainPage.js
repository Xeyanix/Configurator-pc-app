import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import styles from "./MainPage.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function MainPage() {
  let navigate = useNavigate();

  const [userfirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const signInUser = (e) => {
    e.preventDefault();
    window.localStorage.setItem(
      "user",
      JSON.stringify({ userfirstName, userLastName })
    );
    navigate("/configuratorPC");
  };


  return (
    <div>
     <form className={styles.mainPageWrapper} onSubmit={signInUser}>
        <Box sx={{ m: 2 }}>
        <TextField
            margin="dense"
            id="outlined-basic"
            label="First name"
            variant="outlined"
            value={userfirstName}
            onChange={(event) => setUserFirstName(event.target.value)}
          />

          <Button
            disabled={!userfirstName || userLastName}
            variant="contained"
            type="submit"
          >
            Skonfiguruj
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default MainPage;
