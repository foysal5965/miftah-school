'use client';
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import scienceFair from '../assets/sciencefair.jpeg';
import schoolSports from '../assets/schoolsports.jpeg';
import metting from '../assets/metting.jpeg';
import Image from 'next/image';

// Sample data for news and events
const newsAndEvents = [
  {
    title: 'School Sports Day',
    date: 'October 25, 2024',
    description: 'Join us for a fun-filled day of sports activities and competitions.',
    image: schoolSports, // Use imported image
  },
  {
    title: 'Parent-Teacher Meeting',
    date: 'November 10, 2024',
    description: 'An opportunity for parents to discuss their child’s progress with teachers.',
    image: metting, // Use imported image
  },
  {
    title: 'Science Fair',
    date: 'December 5, 2024',
    description: 'Students showcase their innovative science projects.',
    image: scienceFair, // Use imported image
  },
];

const NewsAndEventsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        News & Events
      </Typography>
      <Grid container spacing={4}>
        {newsAndEvents.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}> {/* Ensure all cards are the same height */}
              <Box sx={{ position: 'relative', height: '200px' }}> {/* Fixed height for image container */}
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill" // Use fill to cover the Box area
                  objectFit="cover" // Cover to maintain aspect ratio
                  style={{ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.date}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsAndEventsPage;
