'use client';

import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image'; // Import Next.js Image component
import image1 from '../assets/image1.jpeg'; // Adjust the path as necessary
import image2 from '../assets/image2.jpeg'; // Adjust the path as necessary
import image3 from '../assets/image3.jpeg'; // Adjust the path as necessary

// Define the type for the props
interface ArrowProps {
  onClick: () => void; // Define the onClick prop type
}

// Custom Next Arrow component
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      color: '#fff',
      zIndex: 1,
    }}
  >
    <ArrowForwardIosIcon fontSize="large" />
  </IconButton>
);

// Custom Prev Arrow component
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      color: '#fff',
      zIndex: 1,
    }}
  >
    <ArrowBackIosIcon fontSize="large" />
  </IconButton>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed to 3 seconds
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ width: '100%', maxHeight: '600px', overflow: 'hidden' }}>
      <Slider {...settings}>
        {/* Slide 1 */}
        <Box sx={{ position: 'relative', height: '600px' }}>
          <Image
            src={image1}
            alt="Carousel Image 1"
            layout="fill"
            objectFit="cover"
            quality={100} // Use high quality
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Welcome to Miftah School
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Inspiring the next generation of leaders
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 2 */}
        <Box sx={{ position: 'relative', height: '600px' }}>
          <Image
            src={image2}
            alt="Carousel Image 2"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Excellence in Education
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Empowering students to reach their potential
              </Typography>
              <Button variant="contained" color="secondary">
                Our Programs
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 3 */}
        <Box sx={{ position: 'relative', height: '600px' }}>
          <Image
            src={image3}
            alt="Carousel Image 3"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ mb: 2 }}>
                A Holistic Approach
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Nurturing the whole child for success
              </Typography>
              <Button variant="contained" color="success">
                Explore More
              </Button>
            </Box>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
