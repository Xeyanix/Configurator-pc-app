import React from "react";
import styles from '../../common/styles/Columns.module.scss';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function AppBar() {
  const scrollToContactSection = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      const contactSectionPosition = contactSection.offsetTop;
      window.scrollTo({
        top: contactSectionPosition,
        behavior: "smooth",
      });
    }
  };


  return (
    <div className={styles.wrapper}>
      <h1>PC Configurator</h1>
      <div className={styles.otherPageButtons}>
        <Link to="/">
          <Button variant="contained" color="success">
            Strona Główna
          </Button>
        </Link>
        <Link to="/LoginPage">
          <Button variant="contained">
            Zaloguj
          </Button>
        </Link>
        <Button onClick={scrollToContactSection} variant="contained" color="secondary" >
          Kontakt
        </Button>
      </div>
    </div>
  );
}

export default AppBar;
