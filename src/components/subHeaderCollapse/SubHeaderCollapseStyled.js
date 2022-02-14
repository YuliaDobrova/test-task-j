import styled from 'styled-components';

export const SubHeaderCollapseStyled = styled.div`
  height: 48px;
  background-color: rgba(192, 192, 192, 1);
  .SubHeaderCollapseWrapper {
    height: 48px;
    display: flex;
    justify-content: space-between;
  }
  .SubHeaderCollapseInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    color: #ffffff;
  }
  .SubHeaderCollapseBtnWrapper {
    display: flex;
    justify-content: center;
  }
  .SubHeaderCollapseBtn {
    position: relative;
    height: 48px;
    width: 185px;
    text-align: end;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    border: none;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #ffffff;
    &.black {
      color: #000000;
    }
    &:hover,
    &:focus {
      color: rgba(166, 25, 46, 1);
    }
  }
  .SubHeaderCollapseIcon {
    fill: #ffffff;
    position: absolute;
    left: 40px;
    /* top: 50; */
    &.black {
      fill: #000000;
    }
    &:hover,
    &:focus {
      fill: rgba(166, 25, 46, 1);
    }
  }
`;
