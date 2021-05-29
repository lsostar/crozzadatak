import React from "react";
import "./RecipeIngridients.scss";

const RecipeIngridients = (props) => {
  return (
    <div className={"Recipe"}>
      <div className={"Recipe-Inner"}>
        <div className={"Servings"}>
          <p className={"Servings-Paragraph"}>Servings:</p>
          <p className={"Servings-Number"}>{props.servings}</p>
        </div>
        <div className={"Ingridients"}>
          <p className={"Ingridients-Quant"}>{props.firstIngridientQuant}</p>
          <p className={"Ingridients-Name"}>{props.firstIngridient}</p>
        </div>
        <div className={"Ingridients"}>
          <p className={"Ingridients-Quant"}>{props.secondIngridientQuant}</p>
          <p className={"Ingridients-Name"}>{props.secondIngridient}</p>
        </div>
        <div className={"Ingridients"}>
          <p className={"Ingridients-Quant"}>{props.thirdIngridientQuant}</p>
          <p className={"Ingridients-Name"}>{props.thirdIngridient}</p>
        </div>
        <div className={"Ingridients"}>
          <p className={"Ingridients-Quant"}>{props.fourthIngridientQuant}</p>
          <p className={"Ingridients-Name"}>{props.fourthIngridient}</p>
        </div>
        <div className={"Ingridients"}>
          <p className={"Ingridients-Quant"}>{props.fifthIngridientQuant}</p>
          <p className={"Ingridients-Name"}>{props.fifthIngridient}</p>
        </div>
        <div className={"Ingridients"}>
          <p className={"Ingridients-Quant"}>{props.sixthIngridientQuant}</p>
          <p className={"Ingridients-Name"}>{props.sixthIngridient}</p>
        </div>
        <div className={"Ingridients"}>
          <p className={"Ingridients-Quant"}>{props.seventhIngridientQuant}</p>
          <p className={"Ingridients-Name"}>{props.seventhIngridient}</p>
        </div>
        <div className={"Ingridients"}>
          <p className={"Ingridients-Quant"}>{props.eightIngridientQuant}</p>
          <p className={"Ingridients-Name"}>{props.eightIngridient}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeIngridients;