import styled from 'styled-components';

export const LogoStyled = styled.div`
  .Logo {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    transition-duration: 2000ms;
    transition-property: initial;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      transform: scale(0.9);
    }
  }
`;
