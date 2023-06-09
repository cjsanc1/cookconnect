import { Center, Box, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function RecipesListItem({ recipe }) {
  return (
    <Link as={RouterLink} to={`/recipes/${recipe._id}`}>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="md"
        mb={4}
        width="400px"
      >
        <Center>
          <Text color="teal.500" fontSize="xl">
            {recipe.title}
          </Text>
        </Center>
        <Center>
          <Text fontSize="md" color="gray.600" mt={2}>
            {recipe.description}
          </Text>
        </Center>
      </Box>
    </Link>
  );
}
