// src/components/NavBar.js
import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Tabs>
        <Tab label="Home" value="home" component={Link} to="home" smooth />
        <Tab label="About Me" value="about" component={Link} to="about" smooth />
        <Tab label="Services" value="services" component={Link} to="services" smooth />
        <Tab label="Contact" value="contact" component={Link} to="contact" smooth />
        <Tab label="Experience" value="experience" component={Link} to="experience" smooth />
        <Tab label="Login" value="login" component={Link} to="login" smooth />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
