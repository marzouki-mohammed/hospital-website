
import { FaEyeSlash } from "react-icons/fa";
import stethoscope from "../assets/banner.png"

const SignUp = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="row shadow-lg rounded-3 overflow-hidden bg-white" style={{ maxWidth: "900px" }}>
        
        {/* Section gauche */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white p-4" style={{ backgroundColor: "#A6B1E1" }}>
          <h2 className="fw-bold">
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
          </h2>
          <p className="text-center">We at MediCare are always fully focused on helping your child.</p>
          <img src={stethoscope} alt="Medical" className="img-fluid mt-3" style={{ maxWidth: "250px" }} />
        </div>

        {/* Section droite */}
        <div className="col-md-6 p-5">
          <h3 className="fw-bold text-center mb-4">Create Account</h3>
          
          {/* Boutons de connexion sociale */}
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-light border me-2">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
              Sign up with Google
            </button>
            <button className="btn btn-light border">
              <img src="https://img.icons8.com/color/16/000000/facebook.png" alt="Facebook" className="me-2" />
              Sign up with Facebook
            </button>
          </div>

          <p className="text-center text-muted">- OR -</p>

          {/* Formulaire */}
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3 position-relative">
              <input type="password" className="form-control" placeholder="Password" />
              <FaEyeSlash className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
            </div>
            <button className="btn btn-primary w-100">Create Account</button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <a href="#" className="text-primary">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
