import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewRecipePage from '../NewRecipesPage/NewRecipesPage';
import RecipesIndexPage from '../RecipesIndexPage/RecipesIndexPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import RecipeDetailPage from '../RecipeDetailPage/RecipeDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path='/' element={<HomePage />} />
              <Route path="/recipes/new" element={<NewRecipePage />} />
              <Route path="/recipes" element={<RecipesIndexPage />} />
              <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
