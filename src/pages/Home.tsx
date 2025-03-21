import Nav2 from "../components/layout/Nav2"
import Navbars from "../components/layout/Navbars"


const Home = () => {
  return (
    <div className="container">
        <header className="position-fixed top-0 start-0 w-100 bg-body-tertiary p-2 m-2 border rounded-3 bg-body-tertiary " style={{ zIndex: 1050 }}>
            {/* <Navbars /> */}
            <Nav2 />
        </header>
        <div style={{ paddingTop: "12vh" }}>
            <p>Contenu de la page...</p>
        </div>
        
        
    </div>
  )
}

export default Home