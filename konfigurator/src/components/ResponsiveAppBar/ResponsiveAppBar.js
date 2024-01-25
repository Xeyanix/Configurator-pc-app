import React, { useState } from "react";
import styles from '../../common/styles/Columns.module.scss';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';


function ResponsiveAppBar({ loggedInUser }) {
  const [drawerOpen, setDrawerOpen] = useState(false);


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
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

  const menuItems = [
    { label: "Strona Główna", path: "/" },
    { label: "Zaloguj", path: "/LoginPage" },
    { label: "Konto", path: "/UserPage" },
    { label: "Kontakt", onClick: scrollToContactSection },
  ];

  const BarItems = [
    { label: "Strona Główna", path: "/" },
    { label: "Zaloguj", path: "/LoginPage" },
    { label: "Konto", path: "/UserPage" },
    { label: "Kontakt", onClick: scrollToContactSection },
  ];

  return (
    <div>


      <AppBar position="static">
        <Toolbar className={styles.wrapper}>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            PC Configurator
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
              <MenuItem
                button
                key={index}
                component={item.path ? Link : "button"}
                to={item.path}
                onClick={item.onClick}
              >
                <ListItemText primary={item.label} />

              </MenuItem>
            ))}
            {loggedInUser && (
              <div className={styles.loggedInMessage}>
                Logged in as: {loggedInUser}
              </div>
            )}
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
    </div>
  );
}

export default ResponsiveAppBar;
