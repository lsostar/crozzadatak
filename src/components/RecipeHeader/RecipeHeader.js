import React, { useState, useEffect } from 'react';
import './RecipeHeader.scss';

const RecipeHeader = ({ steps, ingridients, prepTime }) => {
  return (
    <div className={'DetailHeader'}>
      <ul className={'ListOfDetails'}>
        <li className={'Details'}>{steps}</li>
        <li className={'Details'}>{ingridients}</li>
        <li className={'Details'}>{prepTime}</li>
      </ul>
    </div>
  );
};

export default RecipeHeader;