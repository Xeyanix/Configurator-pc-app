import React from 'react';
import Button from "@mui/material/Button";
import styles from "../../common/styles/WelcomePage.module.scss";
import { Link } from 'react-router-dom';

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

            <section className={styles.options}>

                <div className={styles.option} onClick={redirectToCV}>
                    <h2 >Moje CV</h2>
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
