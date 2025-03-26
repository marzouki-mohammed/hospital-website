import Banner from "../components/layout/Banner"
import BannerEnd from "../components/layout/BannerEnd"
import DoctorsList from "../components/layout/DoctorsList"
import Specialties from "../components/layout/Specialties"
import Footer from "../components/layout/Footer"
import NavBar from "../components/layout/NavBar"

const Home = () => {
  return (

    <div className="container-fluid h-100 overflow-x-hidden">
        <header className="d-flex position-fixed top-0 start-0 w-100 justify-content-center" style={{ zIndex: 1050  }}>
          <div className="navBar">
              <NavBar />
          </div>
        </header>
        <div className="main-container h-100 w-100 d-flex justify-content-center">
              <div className="pages" >
                <div className="d-flex flex-column w-100">
                    <Banner />
                    <Specialties />
                    <DoctorsList />
                    <BannerEnd />
                    
                </div>
                <Footer />
                <div style={{height:"30px"}}></div>
              </div>
              
        </div>            
    </div>
    
  )
}

export default Home