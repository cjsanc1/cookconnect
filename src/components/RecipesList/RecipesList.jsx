import { Box, SimpleGrid, Center } from '@chakra-ui/react';
import RecipeListItem from './RecipeListItem/RecipeListItem';

export default function RecipesList({ recipes }) {
  const recipesComponents = recipes.map(recipe => (
    <RecipeListItem key={recipe._id} recipe={recipe} />
  ));

  return (
    <Center>
      <Box mt={4} width="100%">
        <SimpleGrid columns={[1, 2, 3]} spacing={4} justifyItems="center">
          {recipesComponents}
        </SimpleGrid>
      </Box>
    </Center>
  );
}
