import styled from 'styled-components';

export const AccordionItemStyled = styled.div`
  .accordion {
    margin: 0 auto;
    /* width: 90%; */
    width: 1198px;
    /* height: 422px; */
  }
  .accordion .title {
    padding: 14px 14px;
    /* height: 48px; */
    cursor: pointer;
    /* transform: translate3d(0, 0, 0); */
    color: transparent;
    position: relative;
    font-size: 18px;
    background: transparent;
    margin-bottom: -1px;
    /* border-bottom: 1px solid rgba(139, 152, 178, 0.75); */
    text-align: left;
  }

  /* .accordion .title:hover {
  color: rgba(166, 25, 46, 0.5);
} */

  /* .accordion .title::after {
  content: '+';
  font-size: 20px;
  color: rgba(166, 25, 46, 0.5);
  transition: transform 0.5s ease-in-out;
  position: absolute;
  right: 30px;
  font-family: monospace;
} */
  /* .accordion .title.is-expanded {
  transition: background 1.5s, color 1.75s;
  background: rgba(139, 152, 178, 0.95);
  color: rgb(0, 0, 0);
} */
  /* .accordion .title.is-expanded::after {
  content: '-';
  transform: rotate(-360deg);
} */
  .accordion .content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s;
    margin: 0;
    padding: 0 30px;
    /* border: 1px solid rgba(139, 152, 178, 0.75); */
    border-top: 0;
    background: rgba(242, 242, 242, 1);
  }
  /* .accordion .content p {
    padding: 30px 0;
    margin: 0;
    opacity: 0;
    transition: 0.5s;
  } */
  .accordion .content.is-expanded {
    max-height: 500px;
    overflow: hidden;
  }
  .accordion .content.is-expanded p {
    opacity: 1;
  }
  /* .accordion:after {
    width: 100%;
    height: 10px;
    display: block;
    background: rgba(242, 242, 242, 1);
    content: '';
  } */
`;
