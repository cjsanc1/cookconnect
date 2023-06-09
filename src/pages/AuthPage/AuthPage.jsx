import { useState } from 'react';
import { Box, Heading, Button, Center, Text } from '@chakra-ui/react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';


export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Center height="100vh">
      <Box p={4} maxW="400px" borderWidth="1px" borderRadius="md">
        <Heading as="h1" size="xl" mb={4}>
          {showSignUp ? 'Sign Up' : 'Login'}
        </Heading>
        {showSignUp ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
        <Center>
          <Text mb={3}>Or</Text>
        </Center>
        <Center>
          <Button onClick={() => setShowSignUp(!showSignUp)} mb={4} w="88%">
            {showSignUp ? 'Already have an account? Log In' : 'Sign Up Here'}
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
