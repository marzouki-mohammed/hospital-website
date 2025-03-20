import { useState } from "react";
import { BsMenuUp , BsMenuDown} from "react-icons/bs";
import {motion} from "framer-motion"

const Navbars = () => {
  const [isopenMenu , setIsopenMenu] = useState<boolean>(false);
  const handlerClickMenu = () => {
      setIsopenMenu(!isopenMenu);
  }
  return (
    <>
    <div className='container-fluid bg-body-tertiary'>
      <div className="row" style={{height:"10vh" , width:"100wv"}}>
        <div className="col-8 align-content-center">
              <svg width="200"  viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg" className='p-0 m-0'>
                  <text x="10" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">DO</text>
                  <text x="75" y="50" font-family="Arial" font-size="50"  fill="black">C</text>      
                  
                  <path d="M170 35 Q75 80, 70 30 T90 20" stroke="black" stroke-width="4" fill="none"/>
                  <circle cx="106" cy="27" r="5" fill="blue"/>
                  <circle cx="106" cy="40" r="5" fill="blue"/>
                  
                  <text x="116" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">T</text>
                  <text x="143" y="50" font-family="Arial" font-size="52" font-weight="bold" fill="black">O</text>                
                  
                  <circle cx="163" cy="32" r="7" stroke="black" stroke-width="4" fill="white"/>
                  <circle cx="163" cy="32" r="4" fill="blue"/>
                  <text x="182" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">R</text>
              </svg>

        </div>
        <div className="col-4 align-content-center justify-content-end" style={{textAlign:"end"}}>
          <button className='border-0 bg-body-tertiary fs-4' onClick={handlerClickMenu}>
                 <BsMenuUp className={isopenMenu ? "d-block" : "d-none"} />
                 <BsMenuDown className={!isopenMenu ? "d-block" : "d-none"}/>
          </button>
          {isopenMenu &&
            <motion.nav className="mobile-menu-content bg-body-tertiary"
                     initial={{x:-320}}
                     animate={{x:0}}
                     exit={{x:-320}}
                     transition={{duration:0.5 , ease:"linear"}}
            >
              
               
            </motion.nav>
          }
          
        </div>
      </div>
         
         

    </div>
    {/* <Navbar expand="lg" className=" bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{height:"60px"}}>
              <svg width="200"  viewBox="0 0 300 58" xmlns="http://www.w3.org/2000/svg" className='p-0 m-0'>
                  <text x="10" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">DO</text>
                  <text x="75" y="50" font-family="Arial" font-size="50"  fill="black">C</text>      
                  
                  <path d="M170 35 Q75 80, 70 30 T90 20" stroke="black" stroke-width="4" fill="none"/>
                  <circle cx="106" cy="27" r="5" fill="blue"/>
                  <circle cx="106" cy="40" r="5" fill="blue"/>
                  
                  <text x="116" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">T</text>
                  <text x="143" y="50" font-family="Arial" font-size="52" font-weight="bold" fill="black">O</text>                
                  
                  <circle cx="163" cy="32" r="7" stroke="black" stroke-width="4" fill="white"/>
                  <circle cx="163" cy="32" r="4" fill="blue"/>
                  <text x="182" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">R</text>
              </svg>

        </Navbar.Brand>
        <Navbar.Toggle className='border-0 shadow-none'/>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ height: '100vh' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
       
    
    </>
  )
}

export default Navbars