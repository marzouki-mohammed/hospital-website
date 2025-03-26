
import FormSingUp from "../components/layout/Forms/FormSingUp";
import FormLogIn from "../components/layout/Forms/FormLogIn";
import {   RootState } from "../app/store";
import {  useSelector } from "react-redux";

const SignUp = () => {
  const isloged = useSelector((state: RootState) => state.LogIn.value);
  return (
    <div className=" container-fluid w-100 d-flex justify-content-center align-items-center overflow-x-hidden" style={{height:"100vh" , paddingTop:"100px"}}>
      <div className="row w-100 text-center rounded-4" style={{ backgroundColor: "#A6B1E1" , maxWidth:"900px" }}>
        
        {/* Colonne Gauche */}
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center text-white p-4">
          <p className="text-center">We at <strong>Doctor</strong> are always fully focused on helping your child.</p>
          
          {/* Conteneur du SVG */}
          <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
            <svg width="150" height="150" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a1c4fd" stopOpacity="1" />
                  <stop offset="100%" stopColor="#c2e9fb" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Icône */}
              <path d="M100 15 L155 43 V98 C155 135 128 162 100 182 C72 162 45 135 45 98 V43 Z" 
                    fill="url(#grad1)" stroke="white" strokeWidth="4"/>
              <circle cx="100" cy="50" r="15" fill="white"/>
              <rect x="96" y="44" width="8" height="12" fill="#A4D4FF"/>
              <rect x="92" y="48" width="16" height="4" fill="#A4D4FF"/>
              
              {/* Texte DOCTOR */}
              <text x="10" y="150" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">DO</text>
              <text x="75" y="150" fontFamily="Arial" fontSize="50" fill="black">C</text>
              <path d="M170 135 Q75 180, 70 130 T90 120" stroke="black" strokeWidth="4" fill="none"/>
              <circle cx="106" cy="127" r="5" fill="blue"/>
              <circle cx="106" cy="140" r="5" fill="blue"/>
              <text x="116" y="150" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">T</text>
              <text x="143" y="150" fontFamily="Arial" fontSize="52" fontWeight="bold" fill="black">O</text>
              <circle cx="163" cy="132" r="7" stroke="black" strokeWidth="4" fill="white"/>
              <circle cx="163" cy="132" r="4" fill="blue"/>
              <text x="182" y="150" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">R</text>
            </svg>
          </div>
        </div>

        {/* Colonne Droite */}
        {
          isloged ? 
          <FormLogIn /> :
          <FormSingUp />
        }
      </div>
    </div>

  

    // <div className="d-flex justify-content-center align-items-center" style={{height:"100vh", overflow:"hidden"}}>
    //   <div className="row shadow-lg rounded-3 overflow-hidden" style={{ maxWidth: "900px" , backgroundColor: "#A6B1E1" , maxHeight:"90vh" }}>
        
    //     {/* Section gauche */}
    //     <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white p-4">   
    //       <p className="text-center">We at MediCare are always fully focused on helping your child.</p>
    //       <div className="w-100 text-center" style={{height:"50px"}}>
    //         <div className=" position-relative" style={{top:"10px"}}>
    //           <svg width="200" height="200" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
    //                     <defs>
    //                         <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
    //                             <stop offset="0%" stop-color="#a1c4fd" stop-opacity="1" />
    //                             <stop offset="100%" stop-color="#c2e9fb" stop-opacity="1" />
    //                         </linearGradient>
    //                     </defs>

                        
    //                     <path d="M100 15 L155 43 V98 C155 135 128 162 100 182 C72 162 45 135 45 98 V43 Z"
    //                           fill="url(#grad1)" stroke="white" stroke-width="4"/>

                        
    //                     <circle cx="100" cy="50" r="15" fill="white"/>
    //                     <rect x="96" y="44" width="8" height="12" fill="#A4D4FF"/>
    //                     <rect x="92" y="48" width="16" height="4" fill="#A4D4FF"/>

                        
    //                     <text x="10" y="150" font-family="Arial" font-size="40" font-weight="bold" fill="black">DO</text>
    //                     <text x="75" y="150" font-family="Arial" font-size="50" fill="black">C</text>

                        
    //                     <path d="M170 135 Q75 180, 70 130 T90 120" stroke="black" stroke-width="4" fill="none"/>

                        
    //                     <circle cx="106" cy="127" r="5" fill="blue"/>
    //                     <circle cx="106" cy="140" r="5" fill="blue"/>

                        
    //                     <text x="116" y="150" font-family="Arial" font-size="40" font-weight="bold" fill="black">T</text>
    //                     <text x="143" y="150" font-family="Arial" font-size="52" font-weight="bold" fill="black">O</text>

                        
    //                     <circle cx="163" cy="132" r="7" stroke="black" stroke-width="4" fill="white"/>
    //                     <circle cx="163" cy="132" r="4" fill="blue"/>

    //                     <text x="182" y="150" font-family="Arial" font-size="40" font-weight="bold" fill="black">R</text>
    //           </svg>

    //         </div>
    //       </div>
          
          
    //     </div>


    //     {/* Section droite */}
    //     <div className="col-md-6 p-5">
    //       <h3 className="fw-bold text-center mb-4 mt-5">Create Account</h3>
          
    //       {/* Boutons de connexion sociale */}
    //       <div className="d-flex justify-content-center mb-3">
    //         <button className="btn btn-light border me-2">
    //           <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
    //           Sign up with Google
    //         </button>
    //         <button className="btn btn-light border">
    //           <img src="https://img.icons8.com/color/16/000000/facebook.png" alt="Facebook" className="me-2" />
    //           Sign up with Facebook
    //         </button>
    //       </div>

    //       <p className="text-center text-muted">- OR -</p>

    //       {/* Formulaire */}
    //       <form>
    //         <div className="mb-3">
    //           <input type="text" className="form-control" placeholder="Full Name" />
    //         </div>
    //         <div className="mb-3">
    //           <input type="email" className="form-control" placeholder="Email" />
    //         </div>
    //         <div className="mb-3 position-relative">
    //           <input type="password" className="form-control" placeholder="Password" />
    //           <FaEyeSlash className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
    //         </div>
    //         <button className="btn btn-primary w-100">Create Account</button>
    //       </form>

    //       <p className="text-center mt-3">
    //         Already have an account? <a href="#" className="text-primary">Log in</a>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignUp;
