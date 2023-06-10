import { useNavigate, useParams } from "react-router-dom";
import {
  getRecipeRequest,
  deleteRecipeRequest,
} from "../../utilities/recipes-api";
import { useEffect, useState } from "react";
import { Box, Heading, Text, Center, Spinner } from "@chakra-ui/react";
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail";

export default function RecipeDetailPage({ user }) {
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getRecipe() {
      const recipe = await getRecipeRequest(recipeId);
      if (recipe) {
        setRecipe(recipe);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } else {
        setError("No Recipe Found");
        setLoading(false);
      }
    }
    getRecipe();
  }, []);

  async function handleDelete(e) {
    const deleteResponse = await deleteRecipeRequest(recipe._id);
    if (deleteResponse.data === "success") {
      navigate("/recipes");
    }
  }

  return (
    <Box p={4}>
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <RecipeDetail
          recipe={recipe}
          handleDelete={handleDelete}
          setRecipe={setRecipe}
          user={user}
        />
      )}
    </Box>
  );
}
