import Banner from "../components/layout/Banner"
import BannerEnd from "../components/layout/BannerEnd"
import DoctorsList from "../components/layout/DoctorsList"
import Specialties from "../components/layout/specialties"

const Home = () => {
  return (
    <div className="d-flex flex-column w-100">
        <Banner />
        <Specialties />
        <DoctorsList />
        <BannerEnd />
        
    </div>
  )
}

export default Home