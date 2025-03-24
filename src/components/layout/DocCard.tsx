import {motion} from "framer-motion"
import { Doc } from "./DoctorsList"
import { FC } from "react"
interface DocCard {
    doctorInfo : Doc
    page? : string
}
const DocCard:FC<DocCard> = ({doctorInfo,page}) => {
  return (
    <div className={`col-12 col-sm-6 mb-2 ${page === "Home" ? "col-lg-3" : ""}`} >
    <motion.div className="card shadow-sm border-0"
                initial={{y:0}}
                whileHover={{y:-5}}
    >
        <div className="d-flex flex-column gap-2 justify-content-center text-center">
            <div>
                <img
                    src={doctorInfo.image}
                    alt={doctorInfo.name}
                    height="300"
                    width="200" 
                    className="text-center"    
                />
            </div>
                
                <div className="d-flex flex-column justify-content-center text-center">
                    <p className="text-success fw-bold">● Available</p>
                    <h5 className="card-title fw-bold">{doctorInfo.name}</h5>
                    <p className="text-muted">{doctorInfo.specialty}</p>
                </div>

        </div>
         
    </motion.div>
</div>
  )
}

export default DocCard