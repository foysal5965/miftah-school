'use client';
import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#282c34',
        color: 'white',
        py: 4,
        mt: '120px',
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Miftah School
          </Typography>
          <Typography variant="body2">
            Inspiring the next generation of leaders through holistic education.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Home
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            About
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            School Life
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            Admissions
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            Contact Us
          </Link>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Miftah School. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
