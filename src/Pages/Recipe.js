import React, { useEffect, useState } from 'react';
import { ingridientsMock, stepsMock, recipeMock } from '../lib/Mock/recipes';
import Section from '../components/Section/Section';
import RecipeIngridients from '../components/RecipeIngridients/RecipeIngridients';
import RecipeSteps from '../components/RecipeSteps/RecipeSteps';
import RecipeHeader from '../components/RecipeHeader/RecipeHeader';
import './Pages.scss';

const Recipe = (props) => {
  const [recipes, setRecipes] = useState(null);
  const [recipe, setRecipe] = useState('');
  const routeRecipeID = parseInt(props.match.params.id);

  const [steps, setSteps] = useState(null);
  const [step, setStep] = useState('');
  const routeRecipeIDSteps = parseInt(props.match.params.id);

  const [header, setHeader] = useState(null);
  const [head, setHead] = useState('');
  const routeRecipeIDHeader = parseInt(props.match.params.id);

  useEffect(() => {
    setRecipes(ingridientsMock);
  }, [recipe]);

  useEffect(() => {
    setSteps(stepsMock);
  }, [step]);

  useEffect(() => {
    setHeader(recipeMock);
  }, [head]);

  useEffect(() => {
    recipes &&
      setRecipe(...recipes.filter((recipe) => recipe.id === routeRecipeID));
  }, [recipes, routeRecipeID]);

  useEffect(() => {
    steps && setStep(...steps.filter((step) => step.id === routeRecipeIDSteps));
  }, [steps, routeRecipeIDSteps]);

  useEffect(() => {
    header &&
      setHead(...header.filter((head) => head.id === routeRecipeIDHeader));
  }, [header, routeRecipeIDHeader]);

  return (
    <>
      <RecipeHeader
        steps={head.steps}
        ingridients={head.ingridients}
        prepTime={head.prepTime}
      />
      <Section title={recipe.imageAlt} isFavourite={head.isFavourite}>
        <figure className={'Recipe-Figure'}>
          <img
            className={'Recipe-Image'}
            src={recipe.imageUrl}
            alt={recipe.imageAlt}
          />
        </figure>
        <RecipeIngridients
          servings={recipe.servings}
          firstIngridient={recipe.firstIngridient}
          firstIngridientQuant={recipe.firstIngridientQuant}
          secondIngridient={recipe.secondIngridient}
          secondIngridientQuant={recipe.secondIngridientQuant}
          thirdIngridient={recipe.thirdIngridient}
          thirdIngridientQuant={recipe.thirdIngridientQuant}
          fourthIngridient={recipe.fourthIngridient}
          fourthIngridientQuant={recipe.fourthIngridientQuant}
          fifthIngridient={recipe.fifthIngridient}
          fifthIngridientQuant={recipe.fifthIngridientQuant}
          sixthIngridient={recipe.sixthIngridient}
          sixthIngridientQuant={recipe.sixthIngridientQuant}
          seventhIngridient={recipe.seventhIngridient}
          seventhIngridientQuant={recipe.seventhIngridientQuant}
          eightIngridient={recipe.eightIngridient}
          eightIngridientQuant={recipe.eightIngridientQuant}
        />
        <RecipeSteps
          stepOne={step.stepOne}
          stepOneDesc={step.stepOneDesc}
          stepTwo={step.stepTwo}
          stepTwoDesc={step.stepTwoDesc}
          stepThree={step.stepThree}
          stepThreeDesc={step.stepThreeDesc}
          stepFour={step.stepFour}
          stepFourDesc={step.stepFourDesc}
          stepFive={step.stepFive}
          stepFiveDesc={step.stepFiveDesc}
          stepSix={step.stepSix}
          stepSixDesc={step.stepSixDesc}
          stepSeven={step.stepSeven}
          stepSevenDesc={step.stepSevenDesc}
        />
      </Section>
      ;
    </>
  );
};

export default Recipe;