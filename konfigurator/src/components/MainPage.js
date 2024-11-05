import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "../common/styles/MainPage.module.scss";
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import ResponsiveAppBar from "./ResponsiveAppBar";
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function MainPage() {
    const [openSnackbar, setOpenSnackbar] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setOpenSnackbar(false);
    }, [navigate]);

    const handleScrollToOffer = () => {
        const projectSection = document.getElementById('projectSection');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
        <div>
            <ResponsiveAppBar />

            <main>
                <div className={styles.MainContainer}>
                    <section id="aboutSection" className={styles.about}>
                        <div className={styles.header_container} >
                            <div className={`${styles.header} ${styles.header_left}`}>
                                <img src="icon-yellow.png" alt="Opis obrazka">
                                </img>
                            </div>
                            <div className={`${styles.header} ${styles.header_right}`}>
                                <h2>O nas</h2>
                                <p>Web Tune to firma zajmująca się tworzeniem profesjonalnych stron internetowych oraz budowaniem komputerów na zamówienie od lat. Nasz zespół ekspertów składa się z doświadczonych programistów, grafików i specjalistów od sprzętu komputerowego.</p>
                                <p>Jesteśmy dumni z naszego podejścia do projektowania, które skupia się na precyzji, kreatywności i zadowoleniu klienta. Bez względu na to, czy potrzebujesz nowoczesnej strony internetowej dla swojej firmy czy też wydajnego komputera do pracy, jesteśmy tutaj, aby Ci pomóc.</p>
                                <p>Sprawdź naszą ofertę</p>
                            </div>
                        </div>

                        <button
                            href="#projectSection"
                            onClick={handleScrollToOffer}
                            className={styles.banner__btn}
                            title="Link kierujący do kolejnej sekcji 'Oferta' zawierającej oferte ."
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
                    </section>

                    <div className={styles.offer}>
                        <div id="projectSection" className={styles.headerOffer}>
                            <h1>Oferta</h1>
                            <h2 className="section__title section__title--no-margin">
                                Sukces w zasięgu ręki – zapoznaj się z naszymi usługami.
                            </h2>
                        </div>
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

                        <Link to="/Offer">
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: "black",
                                    color: "white"
                                }}
                                sx={{
                                    padding: "20px",
                                    borderRadius: "25px",
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "black",
                                    transition: "background-color 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: "orange !important"
                                    },

                                }}

                            >
                                Zobacz wszystkie nasze usługi
                            </Button>
                        </Link>

                    </div>
                </div>
                <div>
                    <div id="contactSection">
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainPage;
