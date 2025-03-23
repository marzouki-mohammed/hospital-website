import {motion} from "framer-motion"
import doc from "../../assets/banner2.png"
const doctors = [
  {
    name: "Dr. Richard James",
    specialty: "General physician",
    image: doc,
  },
  {
    name: "Dr. Emily Larson",
    specialty: "Gynecologist",
    image: doc,
  },
  {
    name: "Dr. Sarah Patel",
    specialty: "Dermatologist",
    image: doc,
  },
  {
    name: "Dr. Christopher Lee",
    specialty: "Pediatricians",
    image: doc,
  }
];

const DoctorsList = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold">Top  Doctors to Book This Month</h2>
      <p className="text-muted">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="row justify-content-center mt-2">
        {
            doctors.map((doctor, index)=>(
                <div className="col-12 col-sm-6 col-lg-3  mb-2" key={index}>
                    <motion.div className="card shadow-sm border-0"
                                initial={{y:0}}
                                whileHover={{y:-5}}
                    >
                        <div className="d-flex flex-column gap-2">
                            <div>
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    height="300"
                                    width="200" 
                                    className="text-center"    
                                />
                            </div>
                                
                                <div className="d-flex flex-column justify-content-center">
                                    <p className="text-success fw-bold">● Available</p>
                                    <h5 className="card-title fw-bold">{doctor.name}</h5>
                                    <p className="text-muted">{doctor.specialty}</p>
                                </div>

                        </div>
                         
                    </motion.div>
                </div>

            ))
        }
        <div className="mt-4">
                  <a href="#" className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill">
                    more →
                  </a>
        </div>

      </div>

    </div>
  );
};

export default DoctorsList;
