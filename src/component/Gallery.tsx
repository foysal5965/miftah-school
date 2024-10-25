'use client';
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image'; // Import next/image for optimized images
import art from '../assets/art.jpeg';
import sports from '../assets/sports.jpeg';
import art2 from '../assets/art2.jpeg';
import playing from '../assets/playing.jpeg';
import tree from '../assets/tree.jpeg';

// Sample image data for the gallery
const galleryImages = [
  {
    title: 'Art Class',
    image: art,
  },
  {
    title: 'Sports Day',
    image: sports,
  },
  {
    title: 'Art Display',
    image: art2,
  },
  {
    title: 'Playing Together',
    image: playing,
  },
  {
    title: 'Nature Walk',
    image: tree,
  }
];

const GalleryPage = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '4rem 0' }}>
      <Typography  align="center" gutterBottom sx={{
        fontSize:'54px', fontWeight:'bold', color:'#FF503F'
      }}>
        Gallery
      </Typography>
      <Grid container spacing={4}>
        {galleryImages.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <Image
                src={item.image} // Use next/image for optimized loading
                alt={item.title}
                layout="responsive" // This helps maintain the aspect ratio
                width={300} // Set a width for the image
                height={200} // Set a height for the image
                style={{ objectFit: 'cover' }} // Ensures the image covers the card
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GalleryPage;
