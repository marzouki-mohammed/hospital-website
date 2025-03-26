
import ContactForm from "../components/layout/Forms/ContactForm"
import NavBar from "../components/layout/NavBar"
import Footer from "../components/layout/Footer"

const Contact = () => {
  return (
    


<div className="container-fluid h-100 overflow-x-hidden">
        <header className="d-flex position-fixed top-0 start-0 w-100 justify-content-center" style={{ zIndex: 1050  }}>
          <div className="navBar">
              <NavBar />
          </div>
        </header>
        <div className="main-container h-100 w-100 d-flex justify-content-center">
              <div className="pages" >
                <div className="text-center py-5">
                  <ContactForm />
                </div>
                <Footer />
                <div style={{height:"30px"}}></div>
              </div>
              
        </div>            
    </div>
  )
}

export default Contact