import { useState } from 'react';
import AccordionItemData from '../accordionItemData/AccordionItemData.jsx';
import { AccordionItemStyled } from './AccordionItemStyled.js';

const AccordionItem = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const titleClassName = !open ? 'title' : `title is-expanded`;
  const contentClassName = !open ? 'content' : `content is-expanded`;

  return (
    <AccordionItemStyled>
      <div className="accordion">
        <div className="accordion-item" onClick={handleClick}>
          <p className={titleClassName}>{title}1</p>
          {open && (
            <div className={contentClassName}>
              <AccordionItemData />
            </div>
          )}
        </div>
      </div>
    </AccordionItemStyled>
  );
};

export default AccordionItem;
