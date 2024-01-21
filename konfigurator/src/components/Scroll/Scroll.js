import React, { useState } from 'react';
import Button from "@mui/material/Button";
import styles from "./Scroll.module.scss";
import { Link } from 'react-router-dom';

function Scroll(props) {
    const [setScrollPosition] = useState(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setScrollPosition(0);
    };
    
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
        <div className={styles.scrollButton}>
            <Button onClick={scrollToTop} variant="contained" color="success">
                Scroll to Top
            </Button>
            <div>
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
                <Button onClick={scrollToContactSection} variant="contained" color="secondary">
                    Kontakt
                </Button>
            </div>
        </div>
    );
}

export default Scroll;
