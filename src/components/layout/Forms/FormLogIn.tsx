import { FaEyeSlash } from "react-icons/fa";
import { useDispatch} from "react-redux";
import {AppDispatch } from "../../../app/store"
import { loged } from "../../../app/features/logsinSlice";
const FormLogIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="col-12 col-md-7 bg-white rounded-4">
                <h3 className="fw-bold text-center mb-4 mt-5">Log in to your account</h3>
                  
                  {/* Boutons de connexion sociale */}
                  <div className="d-flex justify-content-center mb-3">
                    <button className="btn btn-light border me-2">
                      <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
                       Log In with Google
                    </button>
                    <button className="btn btn-light border">
                      <img src="https://img.icons8.com/color/16/000000/facebook.png" alt="Facebook" className="me-2" />
                      Log In with Facebook
                    </button>
                  </div>
    
                  <p className="text-center text-muted">- OR -</p>
    
                  {/* Formulaire */}
                    <form>
                            <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mb-3 position-relative">
                            <input type="password" className="form-control" placeholder="Password" />
                            <FaEyeSlash className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
                            </div>
                            <button className="btn btn-primary w-100">Log In</button>
                    </form>
                  
    
                  <p className="text-center mt-3">
                    <strong  className="text-primary" onClick={()=>dispatch(loged(false))}>Create Account</strong>
                  </p>
              
    </div>
  )
}

export default FormLogIn