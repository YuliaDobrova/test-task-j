import styled from 'styled-components';

export const CollapseTableStyled = styled.table`
  .CollapseTable {
    width: 1100px;
    height: auto;
  }

  .CollapseTableHeading {
    height: 32px;
  }
  .CollapseTableHeadingRow {
  }
  .CollapseTableHeadingData {
    text-align: start;
    background-color: #f2f2f2;
  }
  .CollapseTableBody {
  }
  .CollapseTableBodyRow {
    height: 32px;
  }
  .CollapseTableData {
    background-color: #f2f2f2;
  }
  .CollapseTableData.disabledColor {
    color: rgba(192, 192, 192, 1);
  }
`;
