import { useState } from 'react';
import './AccordionItem.css';

const AccordionItem = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const titleClassName = !open ? 'title' : `title is-expanded`;
  const contentClassName = !open ? 'content' : `content is-expanded`;

  return (
    <div className="container">
      <div className="accordion">
        <div className="accordion-item" onClick={handleClick}>
          <p className={titleClassName}>{title}</p>
          {open && (
            <div className={contentClassName}>
              <p className="description">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
