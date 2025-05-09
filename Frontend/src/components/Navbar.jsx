import React from 'react';
import { Flex, Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex as="nav" p={4} bg="brand.500" color="white" justify="space-between" align="center">
      <Heading size="md" onClick={() => navigate('/')} cursor="pointer">
        Adsense
      </Heading>
      <Flex gap={4}>
        {user ? (
          <>
            <Button colorScheme="whiteAlpha" onClick={() => logout()}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button colorScheme="whiteAlpha" onClick={() => navigate('/')}>
              Home
            </Button>
            <Button colorScheme="whiteAlpha" onClick={() => {}}>
              About
            </Button>
            <Button colorScheme="whiteAlpha" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button colorScheme="whiteAlpha" onClick={() => navigate('/signup')}>
              Signup
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
