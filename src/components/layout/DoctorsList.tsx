
import doc from "../../assets/banner2.png"
import DocCard from "./DocCard";
import { Link } from "react-router-dom";
export interface Doc{
  name:string,
  specialty:string,
  image:any
}
const doctors : Doc[] = [
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
                <DocCard doctorInfo={doctor}key={index} page="Home"/>

            ))
        }
        <div className="mt-4">
                  <Link to="/Services" className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill">
                    more →
                  </Link>
        </div>

      </div>

    </div>
  );
};

export default DoctorsList;
