import { useRef, useState } from 'react';
import { createRecipeRequest } from '../../utilities/recipes-api';
import { useNavigate, useParams } from "react-router-dom";

export default function NewRecipeForm(){
    const navigate = useNavigate();
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const ingredientsRef = useRef('');
    const instructionsRef = useRef('');
    const[error, setError] = useState({})
    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newRecipe = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            ingredients: ingredientsRef.current.value,
            instructions: instructionsRef.current.value
        }
        try{
            const newRecipeResponse = await createRecipeRequest(newRecipe)
            navigate('/recipes')
        }catch(err){
            setError(err)
        }
    
        
    }
    return(
        <>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef}/>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" ref={descriptionRef}/>
            <label htmlFor="ingredients">Ingredients</label>
            <input type="text" id="ingredients" ref={ingredientsRef}/>
            <label htmlFor="instructions">Instructions</label>
            <input type="text" id="instructions" ref={instructionsRef}/>
            <button>Create Recipe</button>
        </form>
        </>
    )
}