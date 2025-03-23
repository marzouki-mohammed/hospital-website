import banner from "../../assets/banner2.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner-color border rounded-1 d-flex  text-white text-center justify-content-between w-100">
      
      

      <div className="d-flex  flex-column justify-content-center w-100 text-center py-5  text-white rounded">
           <h1 className="fw-bold display-5">Book Appointment <br /> With Trusted Doctors</h1>
           <div  className="d-flex flex-column flex-sm-row justify-content-center gap-2">
              <div className="d-flex justify-content-center mt-4 gap-0">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Doctor 1" className="rounded-circle border border-white" width="50" height="50"  />
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Doctor 2" className="rounded-circle border border-white" width="50" height="50"style={{marginLeft:"-15px"}} />
                    <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Doctor 3" className="rounded-circle border border-white" width="50" height="50" style={{marginLeft:"-15px"}} />
              </div>
              <p className="mt-3 lead fs-6">
                    Simply browse through our extensive list of trusted doctors, <br />
                    schedule your appointment hassle-free.
              </p>

           </div>
           

              
            <div className="mt-4">
                  <a href="#" className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill">
                    Book appointment →
                  </a>
            </div>
          
      </div>


      <div className="d-none d-lg-flex justify-content-center position-relative me-5">
        <div className="authentication-inner"></div>
        <motion.div
          initial={{ y: -1 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 , repeat:Infinity, ease:"easeInOut", delay:0.2}}
          style={{ position: "absolute", zIndex: 110 }}
        >
          <img src={banner} height="300" alt="Banner" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
