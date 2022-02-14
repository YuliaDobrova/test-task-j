import React from 'react';

import IconTriangle from '../iconTriangle/IconTriangle';
import CollapseTable from './collapseTable/CollapseTable';
import sprite from '../../images/sprite.svg';
import { expectColor } from '../table/studentsTable/table-data';
import { CollapseStyled } from './CollapseStyled';

const Collapse = ({ name, id, score, speed, tests, getColor }) => {
  return (
    <CollapseStyled>
      <div className="CollapseNameIdInfoWrapper">
        <p className="CollapseNameIdInfo">
          Student: <b>{name}</b>
        </p>
        <p className="CollapseNameIdInfo">
          ID: <b>{id}</b>
        </p>
      </div>
      <div className="CollapseOtherInfoWrapper">
        <ul>
          <li>
            <p>All concepts</p>
            <IconTriangle additionalClassName="nearCollapseInfo" />
          </li>
          <li>
            <p>All score</p>
            <IconTriangle additionalClassName="nearCollapseInfo" />
          </li>
          <li>
            <p>All speed</p>
            <IconTriangle additionalClassName="nearCollapseInfo" />
          </li>
        </ul>
        <div className="SelectedPeriodWrapper">
          <p className="SelectedPeriodWrapperText">Selected period</p>
          <svg className="CollapseIcon" width="16" height="16">
            <use href={sprite + '#icon-calendar'}></use>
          </svg>
        </div>
        <div className="UpdateWrapper">
          <svg className="UpdateIcon" width="32" height="32">
            <use href={sprite + '#icon-update'}></use>
          </svg>
        </div>
      </div>
      <hr className="CollapseLine" style={{ marginLeft: 0 }} />

      <div className="ScoreRangeWrapper">
        <span>SCORE</span>
        <div className="ScoreRange">
          <div className="ScoreRangeCircle blue"></div>
          <p className="ScoreRangeText blue">90%+ ACCURACY</p>
        </div>
        <div className="ScoreRange">
          <div className="ScoreRangeCircle green"></div>
          <p className="ScoreRangeText green">80-89% ACCURACY</p>
        </div>
        <div className="ScoreRange">
          <div className="ScoreRangeCircle yellow"></div>
          <p className="ScoreRangeText yellow">50-79% ACCURACY</p>
        </div>
        <div className="ScoreRange">
          <div className="ScoreRangeCircle red"></div>
          <p className="ScoreRangeText red">BELOW 50% ACCURACY</p>
        </div>
      </div>

      <div className="SpeedRangeWrapper">
        <span>SCORE</span>
        <div className="SpeedRange">
          <div className="SpeedRangeCircle blue"></div>
          <p className="SpeedRangeText blue">ABOVE EXPECTED</p>
        </div>
        <div className="SpeedRange">
          <div className="SpeedRangeCircle green"></div>
          <p className="SpeedRangeText green">AS EXPECTED</p>
        </div>
        <div className="SpeedRange">
          <div className="SpeedRangeCircle red"></div>
          <p className="SpeedRangeText red">BELOW EXPECTED</p>
        </div>
      </div>

      <CollapseTable tests={tests} getColor={getColor} />

      <hr className="CollapseLine" style={{ marginLeft: 0 }} />
      <div className="AverageData">
        <div className="AverageDataText">
          <b>AVERAGE</b>
        </div>
        <div className="AverageDataScore ">
          <span className={getColor(score)}>
            <b>{score}</b>
          </span>
        </div>
        <div className="AverageDataSpeed ">
          <span className={expectColor[speed]}>
            <b>{speed}</b>
          </span>
        </div>
      </div>
    </CollapseStyled>
  );
};

export default Collapse;
