'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElSchoolLife, setAnchorElSchoolLife] = useState(null);
  const [anchorElAdmissions, setAnchorElAdmissions] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSchoolLifeClick = (event) => {
    setAnchorElSchoolLife(event.currentTarget);
  };

  const handleSchoolLifeClose = () => {
    setAnchorElSchoolLife(null);
  };

  const handleAdmissionsClick = (event) => {
    setAnchorElAdmissions(event.currentTarget);
  };

  const handleAdmissionsClose = () => {
    setAnchorElAdmissions(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Miftah School
      </Typography>
      <List>
        <ListItem key="home">
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="about">
          <ListItemButton>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem key="school-life">
          <ListItemButton onClick={handleSchoolLifeClick}>
            <ListItemText primary="School Life" />
          </ListItemButton>
        </ListItem>
        <ListItem key="admissions">
          <ListItemButton onClick={handleAdmissionsClick}>
            <ListItemText primary="Admissions" />
          </ListItemButton>
        </ListItem>
        <ListItem key="contact">
          <ListItemButton>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            Miftah School
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: 'black' }}>Home</Button>
            <Button sx={{ color: 'black' }}>About</Button>

            {/* School Life Dropdown */}
            <Button
              sx={{ color: 'black' }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleSchoolLifeClick}
            >
              School Life
            </Button>
            <Menu
              anchorEl={anchorElSchoolLife}
              open={Boolean(anchorElSchoolLife)}
              onClose={handleSchoolLifeClose}
            >
              <MenuItem onClick={handleSchoolLifeClose}>The Miftah Way</MenuItem>
              <MenuItem onClick={handleSchoolLifeClose}>Early Years</MenuItem>
              <MenuItem onClick={handleSchoolLifeClose}>Primary</MenuItem>
              <MenuItem onClick={handleSchoolLifeClose}>Secondary</MenuItem>
              <MenuItem onClick={handleSchoolLifeClose}>ECA</MenuItem>
            </Menu>

            {/* Admissions Dropdown */}
            <Button
              sx={{ color: 'black' }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleAdmissionsClick}
            >
              Admissions
            </Button>
            <Menu
              anchorEl={anchorElAdmissions}
              open={Boolean(anchorElAdmissions)}
              onClose={handleAdmissionsClose}
            >
              <MenuItem onClick={handleAdmissionsClose}>Admissions Process</MenuItem>
              <MenuItem onClick={handleAdmissionsClose}>School Fees</MenuItem>
              <MenuItem onClick={handleAdmissionsClose}>School Term Dates</MenuItem>
              <MenuItem onClick={handleAdmissionsClose}>Program Schedule</MenuItem>
              <MenuItem onClick={handleAdmissionsClose}>FAQ</MenuItem>
            </Menu>

            <Button sx={{ color: 'black' }}>Contact Us</Button>
          </Box>

          {/* Mobile Menu - Hamburger Icon */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
