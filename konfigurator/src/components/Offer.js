import React, { useState, useEffect, useRef } from 'react';
import styles from "../common/styles/Offer.module.scss";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from './Footer';
import Button from "@mui/material/Button";
import { Link, useNavigate } from 'react-router-dom';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function Offer() {
    const { state } = useLocation();
    const loggedInUser = state?.loggedInUser;
    const aboutSectionRef = useRef(null);

    const handleScrollToOffer = () => {
        const projectSection = document.getElementById('projectSection');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (aboutSectionRef.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.fadeIn); // Dodaj klasę animacji
                        observer.unobserve(entry.target); // Jednorazowy efekt dla elementu
                    }
                });
            });

            observer.observe(aboutSectionRef.current); // Obserwuj aboutSectionRef
            return () => observer.disconnect();
        }
    }, []);

    
    const redirectToOrderWebsite = () => {
        window.location.href = "/Contact";
    }

    const redirectToOrderPC = () => {
        window.location.href = "/Contact";
    }

    const redirectToCV = () => {
        window.location.href = "/ShowPage";
    }

    const redirectToConfigurator = () => {
        window.location.href = "/ConfigurePage";
    }

    const projectsData = [
        { title: "Tworzenie stron", description: "Zamów swoją strone internetową", buttonText: "Zamów swoją stronę", Icon: WebIcon },
        { title: "Konfigurator PC", description: "Zbuduj swój komputer", buttonText: "Konfigurator", Icon: BuildIcon },
        { title: "Składanie Komputerów", description: "Komputer na zamówienie", buttonText: "Zamów swój komputer", Icon: ComputerIcon },
        { title: "CV", description: "Znajdź wszystkie informacje o mnie.", buttonText: "CV Page", Icon: AssignmentIndIcon },
    ];

    return (
        <div className={styles.Box}>
            <ResponsiveAppBar />
           
            <div className={`${styles.mainContainer} ${styles.hidden}`} ref={aboutSectionRef}> 
                <div className={styles.offer}>
                    <div className={styles.headerOffer}>
                        <div>
                            <h1>Oferta </h1>
                            <p>  Zapewniamy kompleksowe rozwiązania cyfrowe: strony i sklepy internetowe, składanie komputerów i customowe jednostki centralne

                                Sukces w zasięgu ręki – zapoznaj się z naszymi usługami.
                            </p>
                        </div>

                        <button
                            href="#projectSection"
                            onClick={handleScrollToOffer}
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
                </div>
               
                <div id="projectSection">
                    <div className={styles.projects}>
                        {projectsData.map((project, index) => {
                            const IconComponent = project.Icon;
                            return (
                                <div
                                    key={index}
                                    className={styles.option}
                                    onClick={
                                        index === 0 ? redirectToOrderWebsite :
                                            index === 2 ? redirectToOrderPC :
                                                index === 3 ? redirectToCV : redirectToConfigurator
                                    }
                                >
                                    <h1>{project.title}</h1>
                                    <h3>{project.description}</h3>
                                    <IconComponent style={{ fontSize: 150 }} />
                                    <br />
                                    <br />

                                    <Link to={
                                        index === 0 ? "/Contact" :
                                            index === 2 ? "/Contact" :
                                                index === 3 ? "/ShowPage" : "/ConfigurePage"
                                    }>
                                        <Button variant="contained">
                                            {project.buttonText}
                                        </Button>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>



            </div>
            <div id="contactSection">
                <Footer />
            </div>
        </div>
    );
}

export default Offer;
