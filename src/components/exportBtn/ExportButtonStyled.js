import styled from 'styled-components';

export const ExportButtonStyled = styled.div`
  position: relative;
  .ExportIcon {
    position: absolute;
    top: 50%;
    left: -15px;
    fill: rgba(192, 192, 192, 1);
    &:hover,
    &:focus {
      fill: rgba(166, 25, 46, 1);
    }
  }
  .ExportBtn {
    margin-top: 16px;
    margin-right: 133px;
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
    &:hover,
    &:focus {
      color: rgba(166, 25, 46, 1);
    }
  }
  .ExportBtnWrapper + .ExportBtn + .ExportIcon:hover,
  .ExportBtnWrapper + .ExportBtn + .ExportIcon:focus {
    fill: rgba(166, 25, 46, 1);
  }
`;
