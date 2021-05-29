import React from "react";
import "./RecipeSteps.scss";

const RecipeSteps = (props) => {
  return (
    <div className={"Steps"}>
      <h2 className={"DirectionsTitle"}>Directions</h2>
      <div className={"Steps-Inner"}>
        <div className={"StepRow"}>
          <h2 className={"StepRow-Title"}>{props.stepOne}</h2>
          <p className={"StepRow-Description"}>{props.stepOneDesc}</p>
        </div>
        <div className={"StepRow"}>
          <h2 className={"StepRow-Title"}>{props.stepTwo}</h2>
          <p className={"StepRow-Description"}>{props.stepTwoDesc}</p>
        </div>
        <div className={"StepRow"}>
          <h2 className={"StepRow-Title"}>{props.stepThree}</h2>
          <p className={"StepRow-Description"}>{props.stepThreeDesc}</p>
        </div>
        <div className={"StepRow"}>
          <h2 className={"StepRow-Title"}>{props.stepFour}</h2>
          <p className={"StepRow-Description"}>{props.stepFourDesc}</p>
        </div>
        <div className={"StepRow"}>
          <h2 className={"StepRow-Title"}>{props.stepFive}</h2>
          <p className={"StepRow-Description"}>{props.stepFiveDesc}</p>
        </div>
        <div className={"StepRow"}>
          <h2 className={"StepRow-Title"}>{props.stepSix}</h2>
          <p className={"StepRow-Description"}>{props.stepSixDesc}</p>
        </div>
        <div className={"StepRow"}>
          <h2 className={"StepRow-Title"}>{props.stepSeven}</h2>
          <p className={"StepRow-Description"}>{props.stepSevenDesc}</p>
        </div>
      </div>
      <div className={"FooterDiv"}>Bon Appetit!</div>
    </div>
  );
};

export default RecipeSteps;