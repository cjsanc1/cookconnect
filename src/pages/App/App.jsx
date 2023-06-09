import { ChakraProvider, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewRecipePage from '../NewRecipesPage/NewRecipesPage';
import RecipesIndexPage from '../RecipesIndexPage/RecipesIndexPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import RecipeDetailPage from '../RecipeDetailPage/RecipeDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <ChakraProvider>
      <Box>
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Box p={4}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipes/new" element={<NewRecipePage />} />
              <Route path="/recipes" element={<RecipesIndexPage />} />
              <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
            </Routes>
            </Box>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </Box>
    </ChakraProvider>
  );
}
