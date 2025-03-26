import { Link } from "react-router-dom";
import { Container , Row ,Col , Form ,Button} from "react-bootstrap";
const Footer = () => {
  return (
    // <footer className="bg-light text-dark p-3 pt-4 border rounded-3 bg-body-tertiary mt-5">
    //   <div className="container">
    //     <div className="row">
    //       {/* Colonne 1 - Logo et description */}
    //       <div className="col-md-4">
    //       <Link to="/" className=" text-black">
    //                 <svg width="200" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
    //                     <text x="10" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">DO</text>
    //                     <text x="75" y="50" fontFamily="Arial" fontSize="50" fill="black">C</text>      
    //                     <path d="M170 35 Q75 80, 70 30 T90 20" stroke="black" strokeWidth="4" fill="none"/>
    //                     <circle cx="106" cy="27" r="5" fill="blue"/>
    //                     <circle cx="106" cy="40" r="5" fill="blue"/>
    //                     <text x="116" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">T</text>
    //                     <text x="143" y="50" fontFamily="Arial" fontSize="52" fontWeight="bold" fill="black">O</text>                
    //                     <circle cx="163" cy="32" r="7" stroke="black" strokeWidth="4" fill="white"/>
    //                     <circle cx="163" cy="32" r="4" fill="blue"/>
    //                     <text x="182" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">R</text>
    //                 </svg>
    //         </Link>
    //         <p className="text-muted small">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           since the 1500s.
    //         </p>
    //       </div>

    //       {/* Colonne 2 - Liens */}
    //       <div className="col-md-4">
    //         <h5 className="fw-bold">COMPANY</h5>
    //         <ul className="list-unstyled">
    //           <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
    //           <li><a href="#" className="text-dark text-decoration-none">About us</a></li>
    //           <li><a href="#" className="text-dark text-decoration-none">Delivery</a></li>
    //           <li><a href="#" className="text-dark text-decoration-none">Privacy policy</a></li>
    //         </ul>
    //       </div>

    //       {/* Colonne 3 - Contact */}
    //       <div className="col-md-4">
    //         <h5 className="fw-bold">GET IN TOUCH</h5>
    //         <p className="mb-1">📞 +1-212-456-7890</p>
    //         <p>✉️ greatstackdev@gmail.com</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>





    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={12} className="logo-container">

            <div className="logoFooter">

                <svg width="200" height="200" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stop-color="#a1c4fd" stop-opacity="1" />
                              <stop offset="100%" stop-color="#c2e9fb" stop-opacity="1" />
                          </linearGradient>
                      </defs>

                      
                      <path d="M100 15 L155 43 V98 C155 135 128 162 100 182 C72 162 45 135 45 98 V43 Z"
                            fill="url(#grad1)" stroke="white" stroke-width="4"/>

                      
                      <circle cx="100" cy="50" r="15" fill="white"/>
                      <rect x="96" y="44" width="8" height="12" fill="#A4D4FF"/>
                      <rect x="92" y="48" width="16" height="4" fill="#A4D4FF"/>

                      
                      <text x="10" y="150" font-family="Arial" font-size="40" font-weight="bold" fill="black">DO</text>
                      <text x="75" y="150" font-family="Arial" font-size="50" fill="black">C</text>

                      
                      <path d="M170 135 Q75 180, 70 130 T90 120" stroke="black" stroke-width="4" fill="none"/>

                      
                      <circle cx="106" cy="127" r="5" fill="blue"/>
                      <circle cx="106" cy="140" r="5" fill="blue"/>

                      
                      <text x="116" y="150" font-family="Arial" font-size="40" font-weight="bold" fill="black">T</text>
                      <text x="143" y="150" font-family="Arial" font-size="52" font-weight="bold" fill="black">O</text>

                      
                      <circle cx="163" cy="132" r="7" stroke="black" stroke-width="4" fill="white"/>
                      <circle cx="163" cy="132" r="4" fill="blue"/>

                      <text x="182" y="150" font-family="Arial" font-size="40" font-weight="bold" fill="black">R</text>
                </svg>

            </div>
          </Col>
        </Row>

        <Row className="mt-4 p-3">
          <Col md={4}>
            <h5>ProHealth Medical & Healthcare Center</h5>
            <p>123 Anywhere St, Any City 12345</p>
            <p>123-456-7890</p>
            <p>hello@prohealth.com</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Departments</li>
              <li>Doctors</li>
              <li>Testimonials</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Be Our Subscribers</h5>
            <p>Get the latest news about health from our experts.</p>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="example@email.com" />
              </Form.Group>
              <Button className="mt-2" variant="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>Copyright &copy; 2024 ProHealth. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>

    // <footer className="footer-container">
    //   <div className="container text-center text-md-start py-4">
    //     <div className="row">
    //       <div className="col-md-4">
    //         <h5 className="footer-title">ProHealth Medical & Healthcare Center</h5>
    //         <ul className="list-unstyled">
    //           <li>📍 123 Anywhere St, Any City 12345</li>
    //           <li>📞 123-456-7890</li>
    //           <li>✉️ healthcare@prohealth.com</li>
    //         </ul>
    //       </div>
    //       <div className="col-md-4">
    //         <h5>About Us</h5>
    //         <ul className="list-unstyled">
    //           <li>Departments</li>
    //           <li>Doctors</li>
    //           <li>Timetable</li>
    //           <li>Appointment</li>
    //           <li>Testimonials</li>
    //         </ul>
    //       </div>
    //       <div className="col-md-4">
    //         <h5>Be Our Subscribers</h5>
    //         <p>Get the latest news about health from our experts.</p>
    //         <div className="input-group">
    //           <input type="email" className="form-control" placeholder="example@email.com" />
    //           <button className="btn btn-primary">Submit</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="footer-bottom text-center py-3">
    //     <p>Copyright © 2024 ProHealth. All rights reserved.</p>
    //   </div>
    // </footer>

    
  );
};

export default Footer;
