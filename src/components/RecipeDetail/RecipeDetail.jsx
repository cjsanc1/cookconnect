import { useState } from 'react'
import EditRecipeForm from './EditRecipeForm/EditRecipeForm'

export default function RecipeDetail({recipe, handleDelete, setRecipe}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
    setEditFormIsOpen((prevState) => {
return !prevState
    }
    )
}
    return(
        <>
        <div>
            <h3>{recipe.title}</h3>
            <p>Description: {recipe.description}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <button onClick={handleDelete}>Delete {recipe.title}</button>
            <button onClick={toggleEditForm}>
                {editFormIsOpen ? "Close Editor" : "Edit"}
            </button>
            { editFormIsOpen && 
                    <EditRecipeForm recipe={recipe} setRecipe={setRecipe} setEditFormIsOpen={setEditFormIsOpen}></EditRecipeForm>
                }
        </div>
        </>
    )
}