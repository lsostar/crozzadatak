import React, { useState, useContext } from "react";
import "./RecipeCard.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const RecipeCard = ({
  title,
  steps,
  prepTime,
  ingridients,
  alt,
  isFavourite,
  image,
  route,
}) => {
  const [onClickFavourite, setOnClickFavourite] = useState(false);
  const twoMethodClick = () => {
    handleEvent();
    handleAddingFeature();
  };
  const handleEvent = () => {
    setOnClickFavourite(true);
  };

  const { addedFavourite, setAddedFavourite } = useContext(AuthContext);
  const handleAddingFeature = () => {
    setAddedFavourite([
      ...addedFavourite,
      {
        title: title,
        image: image,
        steps: steps,
        prepTime: prepTime,
        ingridients: ingridients,
        alt: alt,
      },
    ]);
  };
  return (
    <div className={"RecipeCard"}>
      <figure className={"RecipeCard-Figure"}>
        <div
          className={
            isFavourite || onClickFavourite
              ? "HeartCircle-Favourite"
              : "HeartCircle"
          }
        >
          <div className={"HeartWrapper"}>
            <AiOutlineHeart onClick={twoMethodClick} />
          </div>
        </div>
        <Link to={route}>
          <img className={"RecipeCard-Image"} src={image} alt={alt} />
        </Link>
        <div className={"RecipeCard-Description"}>
          <h2 className={"Title"}>{title}</h2>
          <ul className={"InfoWrapper"}>
            <li className={"InfoWrapper-Ingridients"}>{ingridients}</li>
            <li className={"InfoWrapper-Steps"}>{steps}</li>
            <li className={"InfoWrapper-PrepTime"}>{prepTime}</li>
          </ul>
        </div>
      </figure>
    </div>
  );
};

export default RecipeCard;
