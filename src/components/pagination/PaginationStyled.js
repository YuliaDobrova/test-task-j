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
    width: 60px;
  }
  .PaginationSelect {
    cursor: pointer;
    position: absolute;
    top: -8px;

    /* color: rgba(130, 130, 130, 1); */
    /* border: none; */
    /* font-family: Rubik; */
    /* font-size: 14px; */
  }
  /* .PaginationSelectOption {
    font-family: Rubik;
    font-size: 14px;
  } */
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
    margin-right: 35px;
    fill: rgba(130, 130, 130, 1);
    &:hover {
      fill: rgba(166, 25, 46, 0.5);
    }
  }
  .PageArrowRight {
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

  /* =================== */
  /* 
  .pageBtn {
    border: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 24px;
    padding: 5px 18px;
    color: rgba(166, 25, 46, 0.5);
    background-color: rgba(139, 152, 178, 0.5);
    border: 1px solid transparent;
    border-radius: 38px;
    cursor: pointer;
    margin-top: 40px;
    margin: 5px;
    transition: transform 250ms linear;
  }

  .pageBtn:hover,
  .pageBtn:focus {
    border: 1px solid rgba(166, 25, 46, 0.5);
    background-color: rgba(139, 152, 178, 0.75);
    transform: scale(0.95);
    font-weight: bold;
  }

  .pageBtnCurrent {
    border: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 24px;
    padding: 5px 18px;
    border: 1px solid transparent;
    border-radius: 38px;
    cursor: pointer;
    margin-top: 40px;
    margin: 5px;
    transition: transform 250ms linear;
    border: 1px solid rgba(166, 25, 46, 0.5);
    background-color: rgba(139, 152, 178, 0.75);
    color: #ffffff;
    font-weight: bold;
  }

  .pageBtnCurrent:hover,
  .pageBtnCurrent:focus {
    border: 1px solid rgba(166, 25, 46, 0.5);
    background-color: rgba(139, 152, 178, 0.75);
    transform: scale(0.95);
    font-weight: bold;
  } */
`;
