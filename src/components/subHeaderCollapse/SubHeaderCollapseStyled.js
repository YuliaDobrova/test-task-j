import styled from 'styled-components';

export const SubHeaderCollapseStyled = styled.div`
  height: 48px;
  background-color: rgba(192, 192, 192, 1);
  /* position: absolute; */
  /* top: 40px; */
  /* left: 0; */
  /* right: 0; */
  /* z-index: 100; */
  /* opacity: 0; */
  /* display: none; */
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
    /* margin-top: 7px; */
    /* margin-right: 133px; */
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

// =========================
// .PageItemWrapperOverlay {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 35px;
//   width: 100%;
//   opacity: 0;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   transform: translateY(80%);
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   /* overflow-y: scroll; */
//   padding: 2px 3px;
//   background-color: rgba(33, 229, 243, 0.45);
// }
// .PageItemWrapperOverlayText {
//   font-size: 17px;
//   font-weight: 600;
//   line-height: 1.75;
//   color: white;
//   text-align: center;
// }
// .PageItemWrapperOverlayText:hover {
//   color: black;
//   font-size: 18px;
//   font-weight: 700;
//   transform: translateY(0);
// }
