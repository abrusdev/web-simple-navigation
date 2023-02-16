import PropTypes from "prop-types";
import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }) {

  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index) => {
    setExpandedIndex((currentExpandedIndex) => {
      return index === currentExpandedIndex ? -1 : index;
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id} style={{ width: 500 }}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
             onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div className="flex justify-center m-5">
      <div className="border-x border-t rounded">
        {renderedItems}
      </div>
    </div>
  )
}

Accordion.propTypes = {
  items: PropTypes.array
}

export default Accordion;