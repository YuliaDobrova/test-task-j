import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  .schoolName {
    position: absolute;
    left: 170px;
    top: 22px;
    color: rgba(130, 130, 130, 1);
  }
  .schoolNameText {
    width: 80px;
    text-transform: uppercase;
  }
  /* .nearText {
    margin-right: 50px;
  } */

  .NavLinkList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .NavLinkListItem {
    margin-right: 16px;
    padding: 6px 12px;
  }
  .NavLink {
    text-transform: uppercase;
    font-size: 14px;
    color: rgba(130, 130, 130, 1);
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
  }
  .NavLink:hover,
  .NavLink:focus {
    color: rgba(166, 25, 46, 1);
  }
  .NavLink--active {
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    background-color: rgba(166, 25, 46, 1);
    padding: 6px 12px;
    /* height: 32px; */
    font-size: 14px;
  }
`;
