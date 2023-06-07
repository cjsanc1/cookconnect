// import { checkToken } from '../../utilities/users-service';
import { useEffect, useState } from 'react'
import { recipesIndexRequest } from '../../utilities/recipes-api';
import RecipesList from '../../components/RecipesList/RecipesList';

export default function RecipesIndexPage() {
  const[recipes, setRecipes] = useState([]);
  useEffect(()=>{
async function getRecipes(){
const recipes = await recipesIndexRequest();
setRecipes(recipes)
}

getRecipes();
}, [])

  return (
    <>
      <h1>All Recipes</h1>
      <RecipesList recipes={recipes}></RecipesList>
    
    </>
  );
}