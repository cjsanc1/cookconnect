import { useState } from "react";
import {
  Box,
  Button,
  Text,
  UnorderedList,
  List,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Flex,
} from "@chakra-ui/react";
import EditRecipeForm from "./EditRecipeForm/EditRecipeForm";

export default function RecipeDetail({
  recipe,
  handleDelete,
  setRecipe,
  user,
}) {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  function toggleEditForm() {
    setEditFormIsOpen((prevState) => !prevState);
  }
  const isUserRecipe = recipe.uploaded_by === user._id;
  return (
    <>
      <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
        <Heading mb={4}>{recipe.title}</Heading>

        <Tabs variant="soft-rounded" colorScheme="gray">
          <TabList>
            <Tab>Description</Tab>
            <Tab>Ingredients</Tab>
            <Tab>Instructions</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text fontSize="md" mb={2}>
                {recipe.description}
              </Text>
            </TabPanel>
            <TabPanel>
              <UnorderedList>
                {recipe.ingredients.map((ingredient, index) => (
                  <List key={index}>
                    <Text fontSize="md">{ingredient}</Text>
                  </List>
                ))}
              </UnorderedList>
            </TabPanel>
            <TabPanel>
              <UnorderedList>
                {recipe.instructions.map((instruction, index) => (
                  <List key={index}>
                    <Text fontSize="md">
                      {index + 1}. {instruction}
                    </Text>
                  </List>
                ))}
              </UnorderedList>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Flex justify="flex-end">
        <Box>
          {isUserRecipe ? (
            <Button colorScheme="red" onClick={handleDelete} mb={2}>
              Delete {recipe.title}
            </Button>
          ) : (
            ""
          )}
          {isUserRecipe ? (
            <Button onClick={toggleEditForm} mb={2} ml={4}>
              {editFormIsOpen ? "X" : "Open Editor"}
            </Button>
          ) : (
            ""
          )}

          {editFormIsOpen && (
            <EditRecipeForm
              recipe={recipe}
              setRecipe={setRecipe}
              setEditFormIsOpen={setEditFormIsOpen}
            />
          )}
        </Box>
      </Flex>
    </>
  );
}
