import styled from 'styled-components';

export const IconTriangleStyled = styled.div`
  display: inline;
  cursor: pointer;
  .iconTriangle {
    position: absolute;
    top: 50%;
    left: 43px;
    fill: rgba(119, 119, 119, 1);
    &:hover {
      fill: rgb(166, 25, 46);
    }
  }
  .iconTriangle.nearSchoolNameText {
    left: 85px;
    top: 40%;
  }
  .iconTriangle.nearSubNavText {
    position: static;
    fill: rgba(192, 192, 192, 1);
    width: 10px;
    margin-left: 10px;
    &:hover {
      fill: rgb(166, 25, 46);
    }
  }
  .iconTriangle.nearParentsText {
    position: absolute;
    left: -10px;
    fill: rgba(192, 192, 192, 1);
    &:hover {
      fill: rgb(166, 25, 46);
    }
  }
  .iconTriangle.nearPagesSelect {
    position: absolute;
    left: 40px;
    fill: rgba(119, 119, 119, 1);
    &:hover {
      fill: rgb(166, 25, 46);
    }
  }
  .nearCollapseInfo {
    position: static;
    margin-left: 10px;
  }
`;
