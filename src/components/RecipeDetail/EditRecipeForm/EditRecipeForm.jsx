import { useState } from "react";
import {
  Center,
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { updateRecipeRequest } from "../../../utilities/recipes-api";

export default function EditRecipeForm({
  recipe,
  setRecipe,
  setEditFormIsOpen,
}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));
  const [instructions, setInstructions] = useState(
    recipe.instructions.join(", ")
  );
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedRecipe = {
      title: title,
      description: description,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      instructions: instructions
        .split(",")
        .map((instruction) => instruction.trim()),
    };
    try {
      const newRecipe = await updateRecipeRequest(recipe._id, updatedRecipe);

      setRecipe(newRecipe);
      setEditFormIsOpen(false);
    } catch (err) {
      setError(err);
    }
  }

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" mb={4} w={800}>
      <Center>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Edit
        </Text>
      </Center>
      {error && <Text>{JSON.stringify(error)}</Text>}
      <FormControl mb={4}>
        <Center>
          <FormLabel htmlFor="title" mt={2}>
            Edit Title
          </FormLabel>
        </Center>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          textAlign="center"
        />
        <Center>
          <FormLabel htmlFor="description" mt={2}>
            Edit Description
          </FormLabel>
        </Center>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          textAlign="center"
        />
        <Center>
          <FormLabel mt={1} htmlFor="ingredients" mt={2}>
            Edit Ingredients
          </FormLabel>
        </Center>
        <Text mb={2} color="gray" textAlign="center">
          When adding your ingredients, separate each ingredient with a comma(,)
        </Text>
        <Textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          textAlign="center"
        />
        <Center>
          <FormLabel htmlFor="instructions" mt={2}>
            Edit Instructions
          </FormLabel>
        </Center>
        <Text mb={2} color="grey">
          When adding your instructions, seperate each step with a comma(,)
        </Text>
        <Textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          textAlign="center"
        />
      </FormControl>

      <Center>
        <Button type="submit" colorScheme="green" onClick={handleSubmit}>
          Update Recipe
        </Button>
      </Center>
    </Box>
  );
}
