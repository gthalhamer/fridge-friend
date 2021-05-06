import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import {RecipeGrid} from '../components/Recipes/RecipesElements';
import Recipe from '../components/Recipes/Recipe'
import InfoSection from '../components/InfoSection/InfoSection';
import shopping from '../components/InfoSection/images/shopping_line.png';
import garbage from '../components/InfoSection/images/garbage.png';
import Footer from '../components/Footer/Footer';
import Recycling from '../components/Recycling/Recycling';
import SearchBar from '../components/SearchBar/SearchBar';

const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const [recipes, setRecipes] = useState([]);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            
            <SearchBar setRecipes={setRecipes}/>
            <RecipeGrid>
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        url={recipe.recipe.url}
                    />
                ))}
            </RecipeGrid>

            <InfoSection id= 'about'
                lightBg={true}
                lightText={false}
                lightTextDesc={false}
                topLine='How it works'
                headline='Cook with what you have.'
                description={'Grocery stores are gross! Limit your trips to the grocery store by utilizing ingredients in your pantry and refrigerator. '
                                + 'Type in your ingredients and see what you can make!'}
                buttonLabel='Get Started'
                imgStart={true}
                alt='Corona Shopping'
                dark={false}
                primary={true}
                darkText={true}
                img={shopping} />
                
            <InfoSection id='waste'
                lightBg= {false}
                lightText= {true}
                lightTextDesc= {true}
                topLine='make the effort'
                headline="Don't waste food."
                description={"Did you know the U.S. was estimated to have thrown out approximately $161 billion (133 billion pounds) worth of food in 2010? "
                                + "That's a lot of food! The best approach to reducing food loss and waste is not to create it in the first place!"}
                buttonLabel='Do your part'
                imgStart={false}
                alt='Waste'
                dark={false}
                primary={true}
                darkText={true} 
                img={garbage} />

            <Recycling />
            <Footer />
        </>
    )
}

export default Home
