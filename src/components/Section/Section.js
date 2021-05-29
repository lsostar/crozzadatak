import React from 'react';
import './Section.scss';
import { AiFillHeart } from 'react-icons/ai';

const Section = ({ children, title, isFavourite }) => {
  return (
    <section className={'Section'}>
      {title && (
        <div className={'FlexHeader'}>
          <h1 className={'Title'}>{title}</h1>
          {isFavourite && (
            <div className={'HeartIcon'}>
              {' '}
              <AiFillHeart />
            </div>
          )}
          {console.log(isFavourite)}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;