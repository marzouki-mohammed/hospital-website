import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-light text-dark p-3 pt-4 border rounded-3 bg-body-tertiary mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 - Logo et description */}
          <div className="col-md-4">
          <Link to="/" className=" text-black">
                    <svg width="200" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">DO</text>
                        <text x="75" y="50" fontFamily="Arial" fontSize="50" fill="black">C</text>      
                        <path d="M170 35 Q75 80, 70 30 T90 20" stroke="black" strokeWidth="4" fill="none"/>
                        <circle cx="106" cy="27" r="5" fill="blue"/>
                        <circle cx="106" cy="40" r="5" fill="blue"/>
                        <text x="116" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">T</text>
                        <text x="143" y="50" fontFamily="Arial" fontSize="52" fontWeight="bold" fill="black">O</text>                
                        <circle cx="163" cy="32" r="7" stroke="black" strokeWidth="4" fill="white"/>
                        <circle cx="163" cy="32" r="4" fill="blue"/>
                        <text x="182" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">R</text>
                    </svg>
            </Link>
            <p className="text-muted small">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              since the 1500s.
            </p>
          </div>

          {/* Colonne 2 - Liens */}
          <div className="col-md-4">
            <h5 className="fw-bold">COMPANY</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#" className="text-dark text-decoration-none">About us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Delivery</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy policy</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div className="col-md-4">
            <h5 className="fw-bold">GET IN TOUCH</h5>
            <p className="mb-1">📞 +1-212-456-7890</p>
            <p>✉️ greatstackdev@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
