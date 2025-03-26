import { FaAngleUp , FaAngleDown , FaSearch} from "react-icons/fa";
import {motion} from "framer-motion"
import { useState } from "react";
import general_physician from "../assets/general_physician.png"
import gynecologist from "../assets/gynecologist.png"
import dermatologist from "../assets/dermatologist.png"
import pediatricians from "../assets/pediatricians.png"
import neurologist from "../assets/neurologist.png" 
import doc from "../assets/banner2.png"
import { Doc } from "../components/layout/DoctorsList";
import DocCard from "../components/layout/DocCard";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const specialties = [
  { name: "General Physician", image: general_physician },
  { name: "Gynecologist", image: gynecologist },
  { name: "Dermatologist", image: dermatologist },
  { name: "Pediatricians", image: pediatricians },
  { name: "Neurologist", image: neurologist},
];

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

const Services = () => {
  const [isopen , setIsopen] = useState<boolean>(false);
  const [isopenSearch , setIsopenSearch] = useState<boolean>(false);
  const handlerClickFilter = () => {
    setIsopen(!isopen);
  }
  const handlerClickSearch = () => {
    setIsopenSearch(!isopenSearch);

  }
  return(
    


    <div className="container-fluid h-100 overflow-x-hidden">
        <header className="d-flex position-fixed top-0 start-0 w-100 justify-content-center" style={{ zIndex: 1050  }}>
          <div className="navBar">
              <NavBar />
          </div>
        </header>
        <div className="main-container h-100 w-100 d-flex justify-content-center">
              <div className="pages" >
                  <div className="d-flex flex-column flex-lg-row border bg-body-tertiary rounded-3">
                    <div className="filter d-flex flex-column p-2 gap-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <motion.div className="mobile-filter d-flex align-items-center gap-2 p-2 border rounded-2"
                                    initial={{ scale: 1 }}
                                    whileTap={{ scale: 1.2 }}
                                    onClick={handlerClickFilter}
                        >
                          Filter {!isopen ? <FaAngleUp /> : <FaAngleDown />}
                        </motion.div>
                        <motion.div className="mobile-filter d-flex align-items-center gap-2 p-2 border rounded-2"
                                initial={{ scale: 1 }}
                                whileTap={{ scale: 1.2 }}
                                onClick={handlerClickSearch}
                        >
                              <FaSearch/>
                        </motion.div>
                      </div>
                      {
                        isopenSearch && 
                        <div className="group">
                          <label htmlFor="searchFilter" className="search-Filter btn-filter p-1">
                            <FaSearch />
                          </label>
                          <input placeholder="Search...." type="search" className="input" id="searchFilter"></input>  
                        </div>
                      }
                      {
                        isopen &&
                        <div className="d-flex flex-column gap-2">
                              {
                                specialties.map((item , index)=>(
                                  <button className="btn btn-filter border-1 d-flex p-1 gap-3 align-items-center " key={index} >
                                        <img src={item.image} width="40" height="40" alt={item.name} />
                                        {item.name}
                                  </button>

                                ))}

                        </div>
                      }

                      

                    </div>

                    <div className="resulte row justify-content-center p-3 filter-result has-scrollbar">
                    {
                        doctors.map((doctor, index)=>(
                            <DocCard  doctorInfo={doctor}key={index} />

                        ))
                    }

                    </div>

                  </div>
                <Footer />
                <div style={{height:"30px"}}></div>
              </div>
              
        </div>            
    </div>






  )
  
}

export default Services