import {motion} from "framer-motion"
import banner from "../../assets/banner.png"
const BannerEnd = () => {
  return (
    <div className="banner-color border rounded-1 d-flex text-white text-center justify-content-between w-100" >
         <div className="d-flex  flex-column justify-content-center w-100 text-center py-5  text-white rounded">
           <h1 className="fw-bold display-5">Book Appointment <br /> With 100+ Trusted Doctors</h1>
           
              
            <div className="mt-4">
                  <a href="#" className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill">
                    Create account →
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
          <img src={banner} height="286" alt="Banner" />
        </motion.div>
      </div>
    </div>
  )
}

export default BannerEnd