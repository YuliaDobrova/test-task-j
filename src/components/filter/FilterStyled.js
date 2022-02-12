import styled from 'styled-components';

export const FilterStyled = styled.label`
  position: relative;
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
      font-size: 14px;
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
`;
