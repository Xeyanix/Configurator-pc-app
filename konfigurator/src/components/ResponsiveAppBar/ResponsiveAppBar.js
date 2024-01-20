import React, { useState } from "react";
import styles from '../../common/styles/Columns.module.scss';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function ResponsiveAppBar() {
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
    { label: "Kontakt", onClick: scrollToContactSection },
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={styles.wrapper}>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
            <Link to="/">
              <Button variant="contained" color="success">
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
