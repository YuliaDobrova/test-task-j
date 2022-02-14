import styled from 'styled-components';

export const PaginationStyled = styled.div`
  margin-top: 25px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .PaginationText1 {
    margin-right: 10px;
    color: rgba(130, 130, 130, 1);
  }
  .PaginationText2 {
    margin-right: 10px;
    color: rgba(130, 130, 130, 1);
    margin-left: 10px;
  }
  .PaginationSelectWrapper {
    position: relative;
    cursor: pointer;
    width: 60px;
  }
  .PaginationSelect {
    cursor: pointer;
    position: absolute;
    top: -8px;
  }

  /* ===убрать стрелку у select=== */
  .select-arrow-delete {
    /* for Firefox */
    -moz-appearance: none;
    /* for Chrome */
    -webkit-appearance: none;
  }
  .select-arrow-delete::-ms-expand {
    /* IE */
    display: none;
  }
  /* ================================= */
  .PageArrowWrapper {
    margin-left: 20px;
  }
  .PageArrowLeft {
    cursor: pointer;
    margin-right: 35px;
    fill: rgba(130, 130, 130, 1);
    &:hover {
      fill: rgba(166, 25, 46, 0.5);
    }
  }
  .PageArrowRight {
    cursor: pointer;
    fill: rgba(130, 130, 130, 1);
    &:hover {
      fill: rgba(166, 25, 46, 0.5);
    }
  }
  .pageBtn {
    font-size: 14px;
    color: rgba(130, 130, 130, 1);
  }

  .pageBtnCurrent {
    font-size: 14px;
    color: rgba(166, 25, 46, 0.5);
  }
`;
