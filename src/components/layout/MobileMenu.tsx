import { motion } from "framer-motion";
import { CiHome } from "react-icons/ci";
import { MdMiscellaneousServices, MdContactMail } from "react-icons/md";
import { TbLogin2, TbLogin } from "react-icons/tb";
import { Link } from "react-router-dom";

interface MobileMenuProps {
    setActiveMenu: (menu: string) => void;
    activeMenu: string;
}

const MobileMenu = ({ setActiveMenu, activeMenu }: MobileMenuProps) => {
    return (
        <motion.nav className="mobile-menu-content d-sm-none m-2 p-1 border rounded-3 bg-body-tertiary"
                    initial={{x:-400}}
                    animate={{x:0}}
                    transition={{duration:0.3, ease:"linear"}}
                    exit={{x:-400}}
        > 

        <div className="row p-3">
            <div className="col-12 mb-5">
                <div className="d-flex flex-column border rounded-3 bg-white">
                    <Link to="/" className="text-black p-0 m-0">
                        <div
                            className={`p-3 border-bottom rounded-top-3 fs-5 d-flex align-items-center gap-2 ${
                            activeMenu === "Home" ? "acliveMenu" : ""
                            }`}
                            onClick={() => setActiveMenu("Home")}
                        >
                            <CiHome className="fs-4" /> Home
                        </div>
                    </Link>
                    <Link to="/Services" className="text-black p-0 m-0">
                        <div
                            className={`p-3 border-bottom fs-5 d-flex align-items-center gap-2 ${
                            activeMenu === "Services" ? "acliveMenu" : ""
                            }`}
                            onClick={() => setActiveMenu("Services")}
                        >
                            <MdMiscellaneousServices className="fs-4" />  Services
                        </div>
                    </Link>
                    <Link to="/Contact" className="text-black p-0 m-0">
                        <div
                            className={`p-3 border-bottom rounded-bottom-3 fs-5 d-flex align-items-center gap-2 ${
                            activeMenu === "Contact" ? "acliveMenu" : ""
                            }`}
                            onClick={() => setActiveMenu("Contact")}
                        >
                            <MdContactMail className="fs-4" /> Contact
                        </div>
                    </Link>
                   

                    

                    
                </div>
            </div>
            <Link to="/SignUp" className="text-black">
                    <motion.div
                        className="col-12 login-btn border rounded-3 bg-white p-3 w-100 fs-5 "
                        initial={{ scale: 1 }}
                        whileTap={{ scale: 1.2 }}
                        >
                        <TbLogin2 className="fs-4" /> Login
                    </motion.div>
                        
            </Link>
                
            </div>
        



        </motion.nav>
    );
};

export default MobileMenu;
