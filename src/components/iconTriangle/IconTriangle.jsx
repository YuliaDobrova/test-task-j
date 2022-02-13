import React from 'react';
import sprite from '../../images/sprite.svg';
import { IconTriangleStyled } from './IconTriangleStyled';

const IconTriangle = ({ additionalClassName, toggleCollapse }) => {
  return (
    <IconTriangleStyled>
      <svg
        className={`iconTriangle ${additionalClassName}`}
        width="10"
        height="5"
        onClick={toggleCollapse}
      >
        <use href={sprite + '#icon-triangle-down'}></use>
      </svg>
    </IconTriangleStyled>
  );
};

export default IconTriangle;
