import Route from "./components/route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import Link from "./components/link";

function App() {
  return (
    <div>
      <Link to='/accordion'>Go to</Link>

      <Route path='/accordion'>
        <AccordionPage />
      </Route>

      <Route path='/dropdown'>
        <DropDownPage />
      </Route>

      <Route path='/buttons'>
        <ButtonPage />
      </Route>
    </div>
  )
}

export default App;