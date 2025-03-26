
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import dentalCare from "../../../assets/dental-care.jpg"

const ContactForm = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src={dentalCare}
            alt="Dental Care"
            className="img-fluid rounded-circle"
            style={{ width: "60%", height: "auto" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6">
          <h2 className="fw-bold">Contact Us</h2>
          <form>
            <div className="mb-3">
              <input type="text" className="w-100 form-control" placeholder="Enter your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="w-100 form-control" placeholder="Enter a valid email address" />
            </div>
            <div className="mb-3">
              <textarea className="w-100 form-control h-100" rows={3} placeholder="Message"></textarea>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input shadow-none" id="termsCheck"/>
              <label className="form-check-label text-muted small" htmlFor="termsCheck">
                I accept the <span className="text-primary">Terms of Service</span>
              </label>
            </div>
            <div className="w-100 text-start">
                 <button className="btn btn-primary w-25">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="row mt-4">
        <div className="col-md-4 mb-2">
          <div className="card border-0 text-center p-3" style={{background:"linear-gradient(to right, rgb(207, 234, 247), rgb(140, 190, 230))"}}>
            <FaPhoneAlt size={30} className="mb-2 mx-auto" />
            <h5>CALL US</h5>
            <p>1 (234) 567-891,</p>
            <p>1 (234) 987-654</p>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card border-0 text-center p-3" style={{background:"linear-gradient(to right, rgb(207, 234, 247), rgb(140, 190, 230))"}}>
            <FaMapMarkerAlt size={30} className="mb-2 mx-auto" />
            <h5>LOCATION</h5>
            <p>121 Rock Street, 21 Avenue,</p>
            <p>New York, NY 92103-9000</p>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card border-0 text-center p-3" style={{background:"linear-gradient(to right, rgb(207, 234, 247), rgb(140, 190, 230))"}}>
            <FaClock size={30} className="mb-2 mx-auto" />
            <h5>HOURS</h5>
            <p>Mon - Fri: 11 am - 8 pm</p>
            <p>Sat, Sun: 6 am - 8 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
