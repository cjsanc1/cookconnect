import RecipeListItem from './RecipeListItem/RecipeListItem'

export default function RecipesList({recipes}){
    return(
        <>
        {recipes.map(recipe => <RecipeListItem></RecipeListItem>)}
        
        </>
    )
}