import React, { useState, useEffect } from "react";
import styles from '../common/styles/Columns.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Snackbar, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from "../context/Context";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CheckIcon from '@mui/icons-material/Check';

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { loggedInUser } = useAuth();
  const [openSnackbar, setOpenSnackbar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleKontoClick = (event) => {
    event.preventDefault();
    if (!loggedInUser) {
      setOpenSnackbar(true);
    } else {
      navigate("/UserPage");
    }
  };

  useEffect(() => {
    setOpenSnackbar(false);
  }, [navigate]);

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

  const scrollToProjectSection = () => {
    const projectSection = document.getElementById("projectSection");
    if (projectSection) {
      const projectSectionPosition = projectSection.offsetTop;
      window.scrollTo({
        top: projectSectionPosition,
        behavior: "smooth",
      });
    }
  };

  const BarItems = [
    { label: "Strona Główna", path: "/" },
    { label: "O nas", path: "/About" },
    { label: "Oferta", path: "/Offer", onClick: scrollToProjectSection },
    { label: "Realizacje", path: "" },
    { label: "Konfiguruj !", path: "/ConfigurePage" },
    { label: "Zaloguj", path: "/LoginPage" },
    { label: "Konto", path: "/UserPage", onClick: handleKontoClick },
    { label: "Kontakt", path: "/Contact", onClick: scrollToContactSection },
  ];

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <img src="/konfigurator/logo1.svg" alt="WebTune Logo" className={styles.logoImage} />
          </Link>
          <div className={styles.menuButton}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={styles.otherPageButtons}>
            {BarItems.map((item, index) => (
              item.label && (
                <MenuItem
                  button
                  key={index}
                  component={item.path ? Link : "button"}
                  to={item.path}
                  onClick={item.onClick}
                  className={styles.buttons}
                >
                  <ListItemText primary={item.label} />
                </MenuItem>
              )
            ))
            }
            {!loggedInUser && (
              <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                message={`Zaloguj się ! `}
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => setOpenSnackbar(false)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
              />
            )}

            {loggedInUser && (
              <Alert
                variant="outlined"
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
                open={openSnackbar}
                sx={{ color: 'white' }}
              >
                Zalogowany: {loggedInUser}
              </Alert>
            )}

          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(9, 67, 100);",
          }
        }}
      >
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
          >
          

            <img src="/konfigurator/logo1.svg" alt="WebTune  Logo" className={styles.logoImage} />
            {/* <HomeIcon /> */}
            <ListItemText />
          </ListItem>
          {BarItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={item.path ? Link : "button"}
              to={item.path}
              onClick={item.onClick}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateX(10px)", 
                }
              }}
            >
              <ListItemText primary={item.label} className={styles.whiteText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default ResponsiveAppBar;