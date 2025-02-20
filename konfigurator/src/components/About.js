import React, { useState, useEffect, useRef } from 'react';
import styles from "../common/styles/About.module.scss";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from './Footer';

function About() {
    const { state } = useLocation();
    const loggedInUser = state?.loggedInUser;
    const aboutSectionRef = useRef(null);

    const handleScrollToAbout = () => {
        const AboutSection = document.getElementById('AboutSection');
        if (AboutSection) {
            AboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.fadeIn);
                }
            });
        });

        observer.observe(aboutSectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.Box}>
            <ResponsiveAppBar />
            <div className={styles.mainContainer}>
                <div
                    id="aboutSection"
                    ref={aboutSectionRef}
                    className={`${styles.about} ${styles.fadeIn}`}
                >
                    <div className={styles.header}>
                        <h1>O nas</h1>
                        <p>
                           PCTuned to firma zajmująca się tworzeniem profesjonalnych stron internetowych oraz budowaniem komputerów na zamówienie od wielu lat.
                            Nasz zespół składa się z ekspertów z zakresu programowania, grafiki komputerowej oraz technologii sprzętowej, co pozwala nam kompleksowo
                            podejść do realizacji każdego projektu.
                        </p>
                        <button
                            href="#AboutSection"
                            onClick={handleScrollToAbout}
                            className={styles.banner__btn}
                            title="Link kierujący do kolejnej sekcji 'Kontakt' zawierającej formularz kontaktowy."
                        >
                            <svg
                                width="22px"
                                height="22px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={styles.banner__btn_icon}
                            >
                                <path
                                    d="M6 15L11.2929 9.70711C11.6834 9.31658 12.3166 9.31658 12.7071 9.70711L18 15"
                                    stroke="#f9f9ff"
                                    strokeWidth="2.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div id="AboutSection">
                        <div className={styles.AboutSection}>
                            <p>
                                Od lat specjalizujemy się w projektowaniu nowoczesnych stron internetowych, które wyróżniają się estetyką, funkcjonalnością oraz
                                intuicyjnością obsługi. Tworzymy strony z myślą o indywidualnych potrzebach naszych klientów, dbając o to, aby każda z nich
                                odzwierciedlała charakter i cele danej firmy. W naszym procesie projektowania wykorzystujemy najnowsze technologie oraz trendy,
                                co pozwala nam zapewnić wysoki standard wizualny i techniczny.
                            </p>
                            <p>
                                Oprócz projektowania stron internetowych, oferujemy również usługę budowania komputerów na zamówienie. Niezależnie od tego, czy
                                potrzebujesz wydajnej stacji roboczej do pracy, komputera do gier, czy też rozbudowanego serwera, jesteśmy tutaj, aby Ci pomóc.
                                Dostosowujemy sprzęt do Twoich wymagań i budżetu, doradzając w wyborze najlepszych komponentów.
                            </p>
                            <p>
                                Naszym głównym celem jest pełna satysfakcja klienta, dlatego każdy projekt traktujemy indywidualnie i z pełnym zaangażowaniem.
                                Nasi specjaliści są zawsze dostępni, aby odpowiedzieć na pytania i wspierać klientów na każdym etapie realizacji.
                                Zaufaj nam i pozwól nam zrealizować Twój projekt na najwyższym poziomie.
                            </p>
                            <p>
                                Sprawdź naszą ofertę i przekonaj się, jak możemy pomóc Ci osiągnąć sukces w świecie cyfrowym!
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div id="contactSection">
                <Footer />
            </div>
        </div>
    );
}

export default About;
