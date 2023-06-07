import RecipeListItem from './RecipeListItem/RecipeListItem'

export default function RecipesList({recipes}){
    const recipesComponents = recipes.map(recipe => <RecipeListItem key={recipe._id} recipe={recipe}></RecipeListItem>)
    return(
        <>
        {recipesComponents}
        
        </>
    )
}