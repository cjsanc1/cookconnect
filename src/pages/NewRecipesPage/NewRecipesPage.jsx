import { Box, Center, Heading } from '@chakra-ui/react';
import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';

export default function NewRecipePage() {
  return (
    <Center>
    <Box p={8}>
      <Heading as="h1" mb={8}>
        New Recipe Page
      </Heading>
      <NewRecipeForm />
    </Box>
    </Center>
  );
}
