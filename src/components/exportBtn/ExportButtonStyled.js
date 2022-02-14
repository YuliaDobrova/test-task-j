import styled from 'styled-components';

export const ExportButtonStyled = styled.div`
  position: relative;
  .ExportBtn {
    margin-top: 16px;
    margin-right: 133px;
    height: 32px;
    width: 110px;
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
    color: rgba(192, 192, 192, 1);
    &.white {
      color: #fff;
      margin-top: 9px;
      margin-right: 0;
      height: 32px;
      width: 120px;
    }
    &:hover,
    &:focus {
      color: rgba(166, 25, 46, 1);
    }
  }

  .ExportIcon {
    position: absolute;
    /* top: 50%; */
    top: 16px;
    left: 5px;
    fill: rgba(192, 192, 192, 1);
    &.white {
      fill: #fff;
      left: 20px;
    }
    &:hover,
    &:focus {
      fill: rgba(166, 25, 46, 1);
    }
  }
  .ExportBtnWrapper + .ExportBtn:hover + .ExportIcon:hover,
  .ExportBtnWrapper + .ExportBtn:focus + .ExportIcon:focus {
    fill: rgba(166, 25, 46, 1);
    color: rgba(166, 25, 46, 1);
  }
`;
