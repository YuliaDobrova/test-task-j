import React from 'react';

import userPhoto from '../../images/user-photo.png';
import IconTriangle from '../iconTriangle/IconTriangle';
import { UserLoginStyled } from './UserLoginStyled';

const UserLogin = () => {
  return (
    <UserLoginStyled>
      <img src={userPhoto} className="userPhoto" alt="userPhoto" />
      <IconTriangle />
    </UserLoginStyled>
  );
};

export default UserLogin;
