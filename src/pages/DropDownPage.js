import DropDown from "../components/dropdown";
import { useState } from "react";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option)
  }

  const options = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ]

  return (
    <div>
      <DropDown options={options} selection={selection} onSelect={handleSelection} />
    </div>
  )
}

export default DropDownPage;