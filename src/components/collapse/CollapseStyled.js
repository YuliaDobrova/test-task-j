import styled from 'styled-components';

export const CollapseStyled = styled.div`
  /* height: 422px; */
  height: auto;
  padding: 20px 60px;
  background-color: #f2f2f2;

  .CollapseNameIdInfoWrapper {
    display: flex;
    margin-bottom: 12px;
  }
  .CollapseNameIdInfo {
    text-transform: uppercase;
    font-size: 14px;
    color: rgba(119, 119, 119, 1);
  }
  .CollapseNameIdInfo:not(:last-child) {
    margin-right: 15px;
  }
  .CollapseOtherInfoWrapper {
    display: flex;
  }
  .CollapseOtherInfoWrapper ul {
    display: flex;
  }
  .CollapseOtherInfoWrapper ul li {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 154px;
    height: 32px;
    border: 1px solid rgba(192, 192, 192, 1);
    margin-right: 16px;
  }
  .CollapseOtherInfoWrapper ul li p {
    font-size: 14px;
    color: rgba(119, 119, 119, 1);
    text-transform: uppercase;
    font-weight: bold;
  }
  .SelectedPeriodWrapper,
  .UpdateWrapper {
    /* width: 154px; */
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .SelectedPeriodWrapper {
    border-bottom: 1px solid rgba(192, 192, 192, 1);
  }
  .SelectedPeriodWrapperText {
    color: rgba(192, 192, 192, 1);
    margin-right: 60px;
  }
  .CollapseIcon,
  .UpdateIcon {
    fill: rgba(192, 192, 192, 1);
    cursor: pointer;
    &:hover {
      fill: rgb(166, 25, 46);
    }
  }
  .UpdateIcon {
    margin-left: 100px;
  }

  .CollapseLine {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 1100px;
  }
  .ScoreRangeWrapper,
  .SpeedRangeWrapper {
    display: flex;
  }
  .SpeedRangeWrapper {
    margin-bottom: 12px;
  }
  .ScoreRange,
  .SpeedRange {
    margin-left: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ScoreRangeCircle,
  .SpeedRangeCircle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .ScoreRangeCircle.blue,
  .SpeedRangeCircle.blue {
    background-color: rgba(66, 133, 244, 1);
  }
  .ScoreRangeCircle.green,
  .SpeedRangeCircle.green {
    background-color: rgba(15, 157, 88, 1);
  }
  .ScoreRangeCircle.yellow {
    background-color: rgba(226, 181, 52, 1);
  }
  .ScoreRangeCircle.red,
  .SpeedRangeCircle.red {
    background-color: rgba(219, 68, 55, 1);
  }

  .AverageData {
    display: flex;
  }
  .AverageDataText {
    margin-left: 30px;
    margin-right: 90px;
  }
  .AverageDataScore {
    margin-right: 45px;
  }
  .AverageDataSpeed {
    width: 50px;
  }
`;
