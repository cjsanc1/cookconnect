import { Center, Box, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { recipesIndexRequest } from '../../utilities/recipes-api';
import RecipesList from '../../components/RecipesList/RecipesList';

export default function RecipesIndexPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const recipes = await recipesIndexRequest();
      setRecipes(recipes);
    }

    getRecipes();
  }, []);

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        <Center>
          All Recipes
        </Center>
      </Heading>
      {recipes.length === 0 ? (
        <Text textAlign="center" fontSize="lg" color="gray.600">
          No recipes at the moment
        </Text>
      ) : (
        <RecipesList recipes={recipes} />
      )}
    </Box>
  );
}
