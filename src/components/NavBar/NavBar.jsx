import { Link, useNavigate } from 'react-router-dom';
import { Link as ChakraLink, Flex, Spacer, Box, Text } from '@chakra-ui/react';
import * as userService from '../../utilities/users-service';



export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    userService.logOut();
    window.location.href = '/'
    setUser(null);
    console.log('working')
  }

  return (
    <Flex align="center" p={4} bg="gray.800" color="white">
      <ChakraLink as={Link} to="/">
      <img src="/CookConnect.jpeg" alt="CookConnect Logo" height={124} width={124} />
      </ChakraLink>
      <ChakraLink as={Link} to="/recipes" mr={4} ml={4}>All Recipes</ChakraLink>
      <ChakraLink as={Link} to="/recipes/new" mr={4}>Add your own Recipe</ChakraLink>
      <Spacer />
      <Box>
        <Flex align="center">
          <Text mr={4}>Welcome, {user.name}!</Text>
          <ChakraLink as={Link} onClick={handleLogOut}>Log Out</ChakraLink>
        </Flex>
      </Box>
    </Flex>
  );
}
