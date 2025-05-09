import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Box minH="calc(100vh - 160px)" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
        <VStack spacing={4} textAlign="center">
          <Heading size="2xl" color="brand.500">Welcome to Adsense</Heading>
          <Text fontSize="lg">Connect influencers with companies for amazing collaborations.</Text>
          <Button colorScheme="brand" onClick={() => navigate('/signup')}>
            Get Started
          </Button>
        </VStack>
      </Box>
      <Footer />
    </>
  );
}

export default Home;