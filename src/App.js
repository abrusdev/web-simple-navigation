import Route from "./components/route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6'>
      <Sidebar />

      <div className='col-span-5'>
        <Route path='/'>
          <DropDownPage />
        </Route>

        <Route path='/accordion'>
          <AccordionPage />
        </Route>

        <Route path='/buttons'>
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}

export default App;