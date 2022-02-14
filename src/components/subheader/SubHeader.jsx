import React from 'react';
import IconTriangle from '../iconTriangle/IconTriangle';
import SubHeaderCollapse from '../subHeaderCollapse/SubHeaderCollapse';
import { SubHeaderStyled } from './SubHeaderStyled';

const SubHeader = () => {
  const SubHeaderData = [
    { text: 'Show all' },
    { text: 'All grades' },
    { text: 'All classes' },
    { text: 'Av.Score' },
    { text: 'Av.Speed' },
    { text: 'All Classes' },
  ];

  return (
    <SubHeaderStyled>
      <div className="SubHeaderWrapper">
        <ul className="SubNavList">
          {SubHeaderData.map(data => (
            <li className="SubNavListItem" key={data.text}>
              <span className="SubNavText">{data.text}</span>
              <IconTriangle additionalClassName="nearSubNavText" />
            </li>
          ))}
        </ul>
        <div className="SubNavClearAllText">Clear All</div>
      </div>
      {/* {selected && <SubHeaderCollapse />} */}
      <SubHeaderCollapse />
    </SubHeaderStyled>
  );
};

export default SubHeader;
