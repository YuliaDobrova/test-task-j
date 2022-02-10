import React from 'react';
import { NavLink } from 'react-router-dom';

import { headerRoutes } from '../../routes/headerRoutes';
import { NavigationStyled } from './NavigationStyled';

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="NavLinkList">
        {headerRoutes.map(route => (
          <li className="NavLinkListItem" key={route.path}>
            <NavLink
              className={navData => (navData.isActive ? 'NavLink--active' : 'NavLink')}
              to={route.path}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
