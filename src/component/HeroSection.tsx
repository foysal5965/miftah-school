'use client';
import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Image from 'next/image'; // Import next/image for optimized images
import kids from '../assets/kids.jpg'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop:'30px' // Prevent overflow
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          {/* Image on the left */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '40vh', md: '80vh' }, // Responsive height
                borderRadius: '20px',
                overflow: 'hidden', // Ensures corners are rounded
              }}
            >
              <Image
                src={kids} // Path to your image
                alt="Kids"
                layout="fill" // Makes the image cover its container
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </Box>
          </Grid>

          {/* Text on the right */}
          <Grid item xs={12} md={6} spacing={2}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, padding: { xs: 2, md: 4 } }}>
              <Typography   sx={{ fontWeight: 'bold', fontSize:'68px', color:'#FF503F' }}>
                For a
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize:'50px', color:'#520000' }}>
              brighter
              </Typography>
              <Typography  sx={{ fontWeight: 'bold', fontSize:'50px' ,color:'#520000'}}>
              generation
              </Typography>
              <Typography sx={{
                color:'#520000',
                fontSize:'19px', marginTop:'12px'
              }}>
              An internationally respected school with a Bruneian heart, that fosters academic excellence and Islamic values in a positive, inclusive and holistic environment.
              </Typography>
              
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
