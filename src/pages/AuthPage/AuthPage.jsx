import { useState } from "react";
import { Box, Heading, Button, Center, Text } from "@chakra-ui/react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Center height="100vh">
      <Center>
        <Image src="/CookConnect.jpeg" alt="CookConnect Image" mt={4} mb={8} />
      </Center>
      <Box p={4} maxW="400px" borderWidth="1px" borderRadius="md">
        <Heading as="h1" size="xl" mb={4}>
          {showSignUp ? "Sign Up" : "Login"}
        </Heading>
        <Text mb={4}>
          Welcome to CookConnect! Login to start sharing your amazing recipes
          and to enjoy recipes others have shared.
        </Text>
        {showSignUp ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
        <Center>
          <Text mb={3}>Don't have an account?</Text>
        </Center>
        <Center>
          <Button onClick={() => setShowSignUp(!showSignUp)} mb={4} w="89%">
            {showSignUp ? "Already have an account? Log In" : "Sign Up Here"}
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
