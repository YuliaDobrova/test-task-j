import styled from 'styled-components';

export const SubHeaderStyled = styled.div`
  height: 40px;
  background-color: rgba(91, 91, 91, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  .SubNavList {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .SubNavListItem {
    position: relative;
    width: 125px;
  }
  .SubNavListItem:not(:first-child) {
    margin-left: 20px;
  }
  .SubNavText {
    text-transform: uppercase;
    font-size: 12px;
    color: rgba(192, 192, 192, 1);
  }
  .SubNavClearAllText {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    color: rgba(192, 192, 192, 1);
    margin-left: 30px;
    &::before {
      content: 'X';
      position: absolute;
      font-weight: normal;
      top: 0;
      left: -15px;
      color: rgba(192, 192, 192, 1);
    }
  }
`;
