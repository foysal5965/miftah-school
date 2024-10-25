'use client';
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Miftah School has transformed my child’s education experience. The teachers are fantastic!',
    role: 'Parent',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Jane Smith',
    feedback: 'The curriculum is well-rounded, and my child is thriving in both academics and extracurriculars.',
    role: 'Parent',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Michael Brown',
    feedback: 'A wonderful school with a nurturing environment. Highly recommend to all parents!',
    role: 'Alumni',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Emily Davis',
    feedback: 'The community is supportive, and the staff genuinely care about the students’ growth.',
    role: 'Parent',
    image: 'https://via.placeholder.com/80',
  },
];

const TestimonialPage = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Our Parents Say
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Avatar src={testimonial.image} alt={testimonial.name} sx={{ marginRight: '1rem' }} />
                  <Box>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1">
                  "{testimonial.feedback}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialPage;
