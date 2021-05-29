import React, { useState, useEffect, useContext } from "react";
import Grid from "../components/Grid/Grid";
import Section from "../components/Section/Section";
import { recipeMock } from "../lib/Mock/recipes";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Loader from "react-loader-spinner";

import "../generalStyles.scss";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const [recipes, setRecipes] = useState(0);
  const { addedFavourite, Image } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setRecipes(recipeMock);
    }, 1000);
  }, [recipes]);

  return (
    <>
      <Section>
        {!recipes ? (
          <Loader type="TailSpin" color="#f2994a" height={100} width={100} />
        ) : (
          <Grid>
            {recipes.map(
              (recipe) =>
                recipe.isFavourite && (
                  <RecipeCard
                    key={recipe.id}
                    image={recipe.imageUrl}
                    alt={recipe.imageAlt}
                    title={recipe.title}
                    ingridients={recipe.ingridients}
                    steps={recipe.steps}
                    isFavourite={recipe.isFavourite}
                    prepTime={recipe.prepTime}
                    route={`/recipe/${recipe.id}`}
                  />
                )
            )}
            {addedFavourite.map((favourite, index) => (
              <RecipeCard
                key={index}
                image={favourite.image}
                alt={favourite.imageAlt}
                title={favourite.title}
                ingridients={favourite.ingridients}
                steps={favourite.steps}
                prepTime={favourite.prepTime}
                route={`/recipe/${favourite.id}`}
              />
            ))}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default Home;