import styled from 'styled-components';

export const StudentsInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .StudentsInfoTitle {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: rgba(91, 91, 91, 1);
  }
  .FilterWrapper {
    position: relative;
  }
  .Filter {
    padding-left: 12px;
    margin-top: 8px;
    width: 499px;
    height: 32px;
    outline: none;
    border: 1px solid transparent;
    background-color: rgba(242, 242, 242, 1);
    &:focus {
      border: 1px solid rgba(192, 192, 192, 1);
    }
    &::placeholder {
      color: rgba(192, 192, 192, 1);
      /* color: rgba(166, 25, 46, 1); */
    }
  }
  .SearchIcon {
    position: absolute;
    top: 40%;
    right: 12px;
    cursor: pointer;
    fill: rgba(192, 192, 192, 1);
    width: 16px;
    height: 16px;
    &:hover,
    &:focus {
      transform: scale(1.15);
      fill: rgba(166, 25, 46, 1);
    }
  }

  .ExportBtnWrapper {
    position: relative;
  }
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
