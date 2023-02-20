import NavigationContext, { NavigationProvider } from './context/navigation'
import { useContext } from "react";
import DropDownPage from "./pages/DropDownPage";

function App() {


  return (
    <div>
      {useContext(NavigationContext) === '/' && <DropDownPage />}
    </div>
  )
}

export default App;