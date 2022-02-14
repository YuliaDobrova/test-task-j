import styled from 'styled-components';

export const FooterStyled = styled.footer`
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid rgba(192, 192, 192, 1);
  .FooterWrapper {
    display: flex;
    justify-content: center;
  }
  .FooterText {
    color: rgba(192, 192, 192, 1);
    text-align: center;
    margin-right: 5px;
    font-size: 14px;
    width: 260px;
  }
  .FooterIcon {
    fill: rgba(192, 192, 192, 1);
    animation: reactIcon 1500ms infinite alternate;
  }
  @keyframes reactIcon {
    from {
      fill: rgba(192, 192, 192, 1);
    }
    to {
      fill: rgba(166, 25, 46, 0.5);
    }
  }

  .FooterDeveloperText {
    color: rgba(192, 192, 192, 1);
    text-align: center;
    font-size: 12px;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
  }
  .Developer {
    text-decoration: underline;
    font-style: italic;
    color: rgba(192, 192, 192, 1);
    cursor: pointer;
  }
  .Developer:hover {
    color: rgba(166, 25, 46, 0.5);
  }
`;
