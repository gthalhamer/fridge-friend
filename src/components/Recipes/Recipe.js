import React from 'react';
import {RecipeContainer, RecipeWrapper, RecipeCard, RecipeImg, RecipeH1, RecipeCal, RecipeUrl} from './RecipesElements';

const Recipe = ({title, calories, image, url}) => {
    return (
        <>
            <RecipeContainer>
                <RecipeWrapper>
                    <RecipeCard>
                        <RecipeImg src={image}/>
                        <RecipeH1>{title}</RecipeH1>
                        <RecipeCal> Total Calories: {calories.toFixed(0)}</RecipeCal>
                        <RecipeUrl href={url} target="_blank">Recipe Link</RecipeUrl>
                    </RecipeCard>
                </RecipeWrapper>
            </RecipeContainer>
        </>
    )
}

export default Recipe
