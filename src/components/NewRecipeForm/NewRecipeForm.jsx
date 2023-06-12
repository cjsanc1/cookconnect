import { useRef, useState } from "react";
import { createRecipeRequest } from "../../utilities/recipes-api";
import { useNavigate, useParams } from "react-router-dom";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

export default function NewRecipeForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const newRecipe = {
      title: title,
      description: description,
      ingredients: ingredients.split(","),
      instructions: instructions.split("+"),
    };

    function parseIngredients() {
      // let newArray = []
    }

    try {
      const newRecipeResponse = await createRecipeRequest(newRecipe);
      navigate("/recipes");
      console.log(typeof newRecipe.ingredients);
    } catch (err) {
      setError(err);
    }
  }

  return (
    <Box>
      {error && <Text>{error.message}</Text>}
      <Box
        as="form"
        onSubmit={handleSubmit}
        p={4}
        borderWidth="1px"
        borderRadius="md"
        maxWidth="400px"
      >
        <FormControl mb={4}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <FormLabel mt={1} htmlFor="ingredients">
            Ingredients
          </FormLabel>
          <Text mb={2} color="grey">
            When adding your ingredients, seperate each ingredient with a
            comma(,)
          </Text>
          <Textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <FormLabel htmlFor="instructions">Instructions</FormLabel>
          <Text mb={2} color="grey">
            When adding your instructions, seperate each step with an addition
            symbol(+)
          </Text>
          <Textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Create Recipe
        </Button>
      </Box>
    </Box>
  );
}
