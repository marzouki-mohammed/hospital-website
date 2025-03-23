import {motion} from "framer-motion"
import general_physician from "../../assets/general_physician.png"
import gynecologist from "../../assets/gynecologist.png"
import dermatologist from "../../assets/dermatologist.png"
import pediatricians from "../../assets/pediatricians.png"
import neurologist from "../../assets/neurologist.png"
const specialties = [
  { name: "General Physician", image: general_physician },
  { name: "Gynecologist", image: gynecologist },
  { name: "Dermatologist", image: dermatologist },
  { name: "Pediatricians", image: pediatricians },
  { name: "Neurologist", image: neurologist},
];

const Specialties = () => {
  return (
    <div className="text-center py-5">
      <h2 className="fw-bold">Find by Speciality</h2>
      <p className="text-muted">
        Simply browse through our extensive list of trusted doctors, <br />
        schedule your appointment hassle-free.
      </p>

      <div className="row justify-content-center mt-4">
        {specialties.map((specialty, index) => (
          <motion.div key={index} className="col-6 col-sm-4 col-md-2 text-center mb-4"
                      initial={{y:0}}
                      whileHover={{y:10}}
          >
            <img
              src={specialty.image}
              alt={specialty.name}
              className="img-fluid rounded-circle border p-2 border-dark"
              style={{ width: "80px", height: "80px" }}
            />
            <p className="mt-2 fw-medium">{specialty.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
