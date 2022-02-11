import React from 'react';

import sprite from '../../images/sprite.svg';
import { ExportButtonStyled } from './ExportButtonStyled';

const ExportButton = () => {
  return (
    <ExportButtonStyled>
      <svg className="ExportIcon" width="16" height="16">
        <use href={sprite + '#icon-export-arrow'}></use>
      </svg>
      <button className="ExportBtn">Export CSV</button>
    </ExportButtonStyled>
  );
};

export default ExportButton;
