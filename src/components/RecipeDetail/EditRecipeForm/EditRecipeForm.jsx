import { useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { updateRecipeRequest } from '../../../utilities/recipes-api';

export default function EditRecipeForm({recipe, setRecipe, setEditFormIsOpen}){
    const navigate = useNavigate();
    const titleRef = useRef(recipe.title);
    const descriptionRef = useRef(recipe.description);
    const ingredientsRef = useRef(recipe.ingredients);
    const instructionsRef = useRef(recipe.instructions);
    const[error, setError] = useState('')


    async function handleSubmit(e){
        e.preventDefault()
        const updatedRecipe = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            ingredients: ingredientsRef.current.value,
            instructions: instructionsRef.current.value
        }
        try{
            const newRecipe = await updateRecipeRequest(recipe._id, updatedRecipe)

            setRecipe(newRecipe)
            setEditFormIsOpen(false)
        }catch(err){
            setError(err)
        }
    }
return(
    <>
    <h3>edit</h3>
    { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef} defaultValue={recipe.title}/>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" ref={descriptionRef} defaultValue={recipe.description}/>
            <label htmlFor="ingredients">Ingredients</label>
            <input type="text" id="ingredients" ref={ingredientsRef} defaultValue={recipe.ingredients}/>
            <label htmlFor="instructions">Instructions</label>
            <input type="text" id="instructions" ref={instructionsRef} defaultValue={recipe.instructions}/>
            <button>Update Recipe</button>
        </form>
    </>
)

}