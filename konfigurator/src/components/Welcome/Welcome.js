import React from 'react';
import Button from "@mui/material/Button";
import styles from "../../common/styles/WelcomePage.module.scss";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Contact from '../Contact/Contact';

function Welcome() {
    const redirectToCV = () => {
        window.location.href = "/ShowPage";
    }

    const redirectToConfigurator = () => {
        window.location.href = "/MainPage";
    }

    const projectsData = [
        { title: "CV", description: "Znajdź wszystkie informacje o mnie.", buttonText: "Show Page" },
        { title: "Konfigurator", description: "Przejrzyj mój projekt konfiguratora.", buttonText: "Konfigurator" },
        { title: "Projekt 3", description: "Przejrzyj mój projekt 3.", buttonText: "Projekt 3" },
        { title: "Projekt 4", description: "Przejrzyj mój projekt 4.", buttonText: "Projekt 4" },
        { title: "Projekt 5", description: "Przejrzyj mój projekt 5.", buttonText: "Show Page" },
    ];

    return (
        <div>
            <div className={styles.MainContainer}>
                <header className={styles.header}>
                    <h1>Moje Portfolio</h1>
                </header>
                <div className={styles.additionalText}>
                    Tu znajdują się moje projekty
                    <br />
                    <br />
                    <ScrollLink to="projectSection" smooth={true} duration={500}>
                        <Button variant="contained" >
                            Projekty
                        </Button>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        <Button variant="contained" >
                            Kontakt
                        </Button>
                    </ScrollLink>
                    <br />
                </div>

                <section id="projectSection" className={styles.projects}>
                    {projectsData.map((project, index) => (
                        <div
                            key={index} 
                            className={styles.option}
                            onClick={index === 0 ? redirectToCV : () => redirectToConfigurator(index)}>
                           
                            <h2>{project.title}</h2>
                            
                            <p>{project.description}</p>
                            <Link to={index === 0 ? "/ShowPage" : "/MainPage"}>
                                <Button variant="contained">
                                    {project.buttonText}
                                </Button>
                            </Link>
                        </div>
                    ))}
                </section>
            </div>

            <div>
                <section id="contact">
                    <Contact />
                </section>
            </div>

            <footer className={styles.footer}>
                <p>&copy; 2024 Moje Portfolio. Wszelkie prawa zastrzeżone.</p>
            </footer>
        </div>
    );
}

export default Welcome;
