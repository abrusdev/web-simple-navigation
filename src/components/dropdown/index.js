import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "../panel";

function DropDown({ options, selection, onSelect }) {

  const [isOpen, setIsOpen] = useState(false);

  const element = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!element.current) {
        return;
      }

      if (!element.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler)
    };
  }, [])

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = (option) => {
    handleSelectClick()
    onSelect(option)
  }

  const renderedItems = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.id}
           onClick={() => handleItemClick(option)}>
        {option.name}
      </div>
    )
  })

  return (
    <div className="w-48 relative" ref={element}>
      <Panel className="flex justify-between items-center cursor-pointer"
             onClick={handleSelectClick}>
        {selection?.name || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  )
}


DropDown.propTypes = {
  options: PropTypes.array
}

export default DropDown;