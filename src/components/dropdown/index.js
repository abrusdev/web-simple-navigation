import PropTypes from "prop-types";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function DropDown({ options, selection, onSelect }) {

  const [isOpen, setIsOpen] = useState(false);

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
    <div className="w-48 relative">
      <span className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
            onClick={handleSelectClick}>
        {selection?.name || "Select..."}
        <GoChevronDown className="text-lg"/>
      </span>
      {isOpen && <div className="absolute top-full border shadow bg-white w-full">{renderedItems}</div>}
    </div>
  )
}


DropDown.propTypes = {
  options: PropTypes.array
}

export default DropDown;