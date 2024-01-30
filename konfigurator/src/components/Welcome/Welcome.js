import React from 'react';
import Button from "@mui/material/Button";
import styles from "../../common/styles/WelcomePage.module.scss";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';  

function Welcome() {
   

    const redirectToCV = () => {
        window.location.href = "/ShowPage";
    }

    const redirectToConfigurator = () => {
        window.location.href = "/MainPage";
    }

    return (
        <div className={styles.MainContainer}>
            <header className={styles.header}>
                <h1>Moje Portfolio</h1>
            </header>

            <div className={styles.additionalText}>
                Tu znajdują sie moje projekty
                <br />
                <br />
                <ScrollLink to="projectSection" smooth={true} duration={500}> 
                <Button variant="contained" >
                    Projekty
                </Button>
                </ScrollLink>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

            <section  className={styles.options}>

                <div id="projectSection" className={styles.option} onClick={redirectToCV}>
                    <h2 > CV</h2>
                    <p>Znajdź wszystkie informacje o mnie.</p>
                    <Link to="/ShowPage">
                        <Button variant="contained">
                            Show Page
                        </Button>
                    </Link>
                </div>

                <div className={styles.option} onClick={redirectToConfigurator}>
                    <h2>Konfigurator</h2>
                    <p>Przejrzyj mój projekt konfiguratora. </p>
                    <Link to="/MainPage">
                        <Button variant="contained">
                            Konfigurator
                        </Button>
                    </Link>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 Twoje Portfolio. Wszelkie prawa zastrzeżone.</p>
            </footer>
        </div>
    );
}

export default Welcome;
