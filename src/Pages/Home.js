import React, { useState, useEffect, useContext } from "react";
import Grid from "../components/Grid/Grid";
import Section from "../components/Section/Section";
import { recipeMock } from "../lib/Mock/recipes";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Loader from "react-loader-spinner";
import MainHeader from "../components/MainHeader/MainHeader";
import Modal from "../components/Modal/Modal";
import { AuthContext } from "../context/AuthContext";
import { useFormik } from "formik";
import "../generalStyles.scss";

const Home = () => {
  const [recipes, setRecipes] = useState(0);
  const { isOpened, setIsOpened, isLoggedIn, isFavourite } =
    useContext(AuthContext);
  const [addedRecipe, setAddedRecipe] = useState([]);
  const { addedFavourite, Image, setImage } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setRecipes(recipeMock);
    }, 1000);
  }, [recipes]);

  const formik = useFormik({
    initialValues: {
      id: 1,
      title: "",
      numberOfSteps: "",
      time: "",
      numberOfIngridients: "",
      images: [],
    },
    onSubmit: (values, { resetForm }) => {
      setAddedRecipe([...addedRecipe, values]);
      setIsOpened(false);
      resetForm({});
    },
  });

  const fileSelectorHandler = (event) => {
    const file = event.target.files[0];
    setImage(file);
    var reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setImage(reader.result);
      },
      false
    );

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Section>
        {isOpened && (
          <Modal title="New yummy recipe">
            <form className={"ModalForm"} onSubmit={formik.handleSubmit}>
              <div className={"FormRow"}>
                <label htmlFor="title">Title: *</label>
                <input
                  id="title"
                  type="text"
                  {...formik.getFieldProps("title")}
                />
              </div>
              <div className={"FormRow"}>
                <label htmlFor="title">Steps: *</label>
                <input
                  id="numberOfSteps"
                  type="text"
                  {...formik.getFieldProps("numberOfSteps")}
                />
              </div>
              <div className={"FormRow"}>
                <label htmlFor="title">Preparation time: *</label>
                <input
                  id="time"
                  type="text"
                  {...formik.getFieldProps("time")}
                />
              </div>
              <div className={"FormRow"}>
                <label htmlFor="title">Ingredients: *</label>
                <input
                  id="numberOfIngridients"
                  type="text"
                  {...formik.getFieldProps("numberOfIngridients")}
                />
              </div>
              <div className={"FormRow"}>
                <label htmlFor="imgURL">Image: *</label>
                <input id="imgURL" type="file" onChange={fileSelectorHandler} />
              </div>

              <button className={"FormButton"}>Add</button>
            </form>
          </Modal>
        )}
        {isLoggedIn && <MainHeader title={"Your recipes"} />}
        {!recipes ? (
          <Loader type="TailSpin" color="#f2994a" height={100} width={100} />
        ) : (
          <Grid>
            {recipes.map(
              (recipe, index) =>
                recipe.isFeatured && (
                  <RecipeCard
                    key={index}
                    image={recipe.imageUrl}
                    alt={recipe.imageAlt}
                    title={recipe.title}
                    ingridients={recipe.ingridients}
                    steps={recipe.steps}
                    prepTime={recipe.prepTime}
                    isFavourite={recipe.isFavourite}
                    addedFavourite={addedFavourite}
                    route={`/recipe/${recipe.id}`}
                  />
                )
            )}
            {addedRecipe.map((prop, index) => (
              <RecipeCard
                key={index}
                title={prop.title}
                ingridients={`${prop.numberOfIngridients} INGRIDIENTS`}
                steps={`${prop.numberOfSteps} STEPS`}
                prepTime={`${prop.time} MIN`}
                image={Image}
              />
            ))}{" "}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default Home;