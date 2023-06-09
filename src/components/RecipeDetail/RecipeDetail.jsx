import { useState } from 'react';
import { Box, Button, Text, UnorderedList, List } from '@chakra-ui/react';
import EditRecipeForm from './EditRecipeForm/EditRecipeForm';

export default function RecipeDetail({ recipe, handleDelete, setRecipe }) {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  function toggleEditForm() {
    setEditFormIsOpen(prevState => !prevState);
  }

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
        <center>
      <Text fontSize="xl" fontWeight="bold" mb={2}>{recipe.title}</Text>
      <Text fontSize="md" mb={2}>Description: {recipe.description}</Text>
      <Text fontSize="md" mb={2}>Ingredients:</Text>
      <UnorderedList>
        {recipe.ingredients.map((ingredient, index) => (
          <List key={index}>
            <Text fontSize="md">{ingredient}</Text>
          </List>
        ))}
      </UnorderedList>
      <Text fontSize="md" mb={2}>Instructions: {recipe.instructions}</Text>
      <Button colorScheme="red" onClick={handleDelete} mb={2}>Delete {recipe.title}</Button>
      <Button onClick={toggleEditForm} mb={2} ml={4}>
        {editFormIsOpen ? 'X' : 'Open Editor'}
      </Button>
      {editFormIsOpen && (
        <EditRecipeForm
          recipe={recipe}
          setRecipe={setRecipe}
          setEditFormIsOpen={setEditFormIsOpen}
        />
      )}
      </center>
    </Box>
  );
}
