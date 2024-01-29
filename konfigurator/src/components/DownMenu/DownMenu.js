import React, { useState } from 'react';
import Button from "@mui/material/Button";
import styles from "../../common/styles/DownMenu.module.scss";
import { Link } from 'react-router-dom';

function DownMenu(props) {
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
        <footer>
            <div className={styles.mainContainer}>
                <p className={styles.copyrightText}>
                    &copy; {new Date().getFullYear()}{' '}
                    <Link to="/" >
                        Configurator
                    </Link>
                    . All rights reserved.
                </p>

                <div className={styles.buttonsContainer}>
                    <Link to="/">
                        <Button variant="contained" color="error">
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
                    <Button onClick={scrollToTop} variant="contained" color="success">
                        Scroll to Top
                    </Button>
                </div>
            </div>
        </footer>
    );
}

export default DownMenu;
