
import Footer from "../components/layout/Footer"
import NavBar from "../components/layout/NavBar"
import { Outlet } from "react-router-dom"


const LayoutPages = () => {
  return (
    // <div className="container-fluid h-100 overflow-x-hidden">
    //     <header className="d-flex position-fixed top-0 start-0 w-100 justify-content-center" style={{ zIndex: 1050  }}>
    //       <div className="navBar">
    //           <NavBar />
    //       </div>
    //     </header>
    //     <div className="main-container h-100 w-100 d-flex justify-content-center">
    //           <div className="pages" >
    //             <Outlet />
    //             <Footer />
    //             <div style={{height:"30px"}}></div>
    //           </div>
              
    //     </div>            
    // </div>
    <Outlet />
  )
}

export default LayoutPages