
import { BrowserRouter , Routes , Route } from "react-router-dom"
import LayoutPages from "./pages/LayoutPages"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"


const App = () => {
  return (
     <>


       
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutPages />}>
              <Route index element={<Home />} />
              <Route path="Services" element={<Services />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
       </BrowserRouter>
       
     </>

    
  )
}

export default App