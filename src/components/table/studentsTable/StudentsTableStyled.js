import styled from 'styled-components';

export const StudentsTableStyled = styled.div`
  .Table {
    color: rgba(130, 130, 130, 1);
    width: 1300px;
    height: auto;
  }
  .TableHeading {
    height: 48px;
  }
  .TableHeadingRow {
    position: relative;
  }
  .TableHeadingData {
    font-weight: 400;
    padding-left: 10px;
  }
  .TableBody {
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(91, 91, 91, 0.15);
    border-bottom: 2px solid rgba(192, 192, 192, 1);
  }
  .TableBodyRow {
    position: relative;
    height: 48px;
  }

  .TableData {
    position: relative;
    border: none;
    padding: 0;
    height: 100%;
    padding-left: 10px;
    color: rgba(130, 130, 130, 1);
  }
  .sort {
    cursor: pointer;
    &:hover {
      color: rgba(166, 25, 46, 1);
    }
  }

  .TableDataTriagleWrapper {
    position: relative;
    width: 20px;
  }

  .disabledColor {
    color: rgba(192, 192, 192, 1);
  }

  .AccordionWrapper {
    position: absolute;
    top: 0;
    left: -76px;
    width: 1343px;
    height: 422px;
  }

  tbody tr:nth-child(odd) {
    background-color: rgba(255, 255, 255, 1);
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .TableBodyRow.selectedRow {
    background-color: #f2f2f2;
  }

  /* checkbox */
  .checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  .checkbox + label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 2px solid rgba(130, 130, 130, 1);
    border-radius: 0.2em;
    margin-top: 5px;
    margin-left: 0.9em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  .checkbox:checked + label::before {
    /* border-color: rgba(130, 130, 130, 1); */
    border-color: rgba(0, 0, 0, 1);
    background-color: transparent;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='000000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
  }

  /* ?????????? ?????? ?????????????????? ?????????????? ???? checkbox */
  .checkbox:not(:disabled):not(:checked) + label:hover::before {
    border-color: rgba(166, 25, 46, 0.5);
  }
  /* ?????????? ?????? ????????????????, ???????????????????????? ?? ?????????????????? disabled */
  .custom-checkbox:disabled + label::before {
    background-color: rgba(242, 242, 242, 1);
  }

  /* === COLORS === */
  .red {
    color: rgba(219, 68, 55, 1);
  }
  .yellow {
    color: rgba(226, 181, 52, 1);
  }
  .green {
    color: rgba(15, 157, 88, 1);
  }
  .blue {
    color: rgba(66, 133, 244, 1);
  }
`;
