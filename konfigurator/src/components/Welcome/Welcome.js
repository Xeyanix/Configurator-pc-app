import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "../../common/styles/WelcomePage.module.scss";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Contact from '../Contact/Contact';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Welcome() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

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

    const menuItems = [
        { label: "Witaj !", path: "/" },
        { label: "Strona Główna", path: "/MainPage" },
        { label: "Zaloguj", path: "/LoginPage" },
        { label: "Konto", path: "/UserPage" },
        { label: "Kontakt", onClick: scrollToContactSection },

    ];

    const BarItems = [
        { label: "Witaj !", path: "/" },
        { label: "Strona Główna", path: "/MainPage" },
        { label: "Zaloguj", path: "/LoginPage" },
        { label: "Konto", path: "/UserPage" },
        { label: "Kontakt", onClick: scrollToContactSection },

    ];


    return (
        <div>
            <div className={styles.MainContainer}>
                <AppBar position="static">
                    <Toolbar className={styles.wrapper}>
                        <Typography
                            variant="h4"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 0,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                          
                        </Typography>

                        <div className={styles.otherPageButtons}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>

                            {BarItems.map((item, index) => (
                                item.label && (
                                    <MenuItem
                                        button
                                        key={index}
                                        component={item.path ? Link : "button"}
                                        to={item.path}
                                        onClick={item.onClick}
                                    >
                                        <ListItemText primary={item.label} />

                                    </MenuItem>
                                )
                            ))}




                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem
                                button
                                key={index}
                                component={item.path ? Link : "button"}
                                to={item.path}
                                onClick={item.onClick}
                            >
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <div className={styles.additionalText}>
                    Tu znajdują się moje projekty
                </div>
                <ScrollLink to="contact" smooth={true} duration={500}>
                    <Button variant="contained" >
                        Kontakt
                    </Button>
                </ScrollLink>
                <ScrollLink to="projectSection" smooth={true} duration={500}>
                    <Button variant="contained" >
                        Projekty
                    </Button>
                </ScrollLink>
                <header className={styles.header}>
                    <h1>Moje Portfolio</h1>
                </header>


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
