
import NavBar from "../components/layout/NavBar"
import { Outlet } from "react-router-dom"


const LayoutPages = () => {
  return (
    <div className="container">
        <header className="d-flex position-fixed top-0 start-0 w-100 justify-content-center" style={{ zIndex: 1050  }}>
            

          <div className="navBar">
              <NavBar />
          </div>
        </header>
        <div style={{ paddingTop: "14vh" }}>
           <Outlet />
        </div>
        
        
    </div>
  )
}

export default LayoutPages