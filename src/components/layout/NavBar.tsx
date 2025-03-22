
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { FaRegWindowClose } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { MdMiscellaneousServices, MdContactMail } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import MobileMenu from "./MobileMenu";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isopenMenu, setIsopenMenu] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState<string>("Home");

    const handlerClickMenu = () => {
        setIsopenMenu(!isopenMenu);
    };

    return (
        <>
            <div className="row bg-body-tertiary p-2 m-2 border rounded-3" style={{ height: "" }}>
                {/* Bouton du menu mobile */}
                <div className="col-5 mt-1 d-sm-none">
                    <button className="border-0 bg-body-tertiary fs-4" onClick={handlerClickMenu}>
                        {isopenMenu ? <FaRegWindowClose /> : <TfiMenu />}
                    </button>
                </div>

                {/* Logo */}
                <div className="logo col-7 col-sm-4">
                  <Link to="/" className=" text-black">
                    <svg width="200" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">DO</text>
                        <text x="75" y="50" fontFamily="Arial" fontSize="50" fill="black">C</text>      
                        <path d="M170 35 Q75 80, 70 30 T90 20" stroke="black" strokeWidth="4" fill="none"/>
                        <circle cx="106" cy="27" r="5" fill="blue"/>
                        <circle cx="106" cy="40" r="5" fill="blue"/>
                        <text x="116" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">T</text>
                        <text x="143" y="50" fontFamily="Arial" fontSize="52" fontWeight="bold" fill="black">O</text>                
                        <circle cx="163" cy="32" r="7" stroke="black" strokeWidth="4" fill="white"/>
                        <circle cx="163" cy="32" r="4" fill="blue"/>
                        <text x="182" y="50" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="black">R</text>
                    </svg>
                   </Link>
                </div>

                {/* Menu Desktop */}
                <div className="col-sm-8 d-none d-sm-flex gap-2 justify-content-end">
                    <Link to="/" className=" text-black">
                        <MenuItem label="Home" Icon={CiHome} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    </Link>
                    <Link to="/Services" className=" text-black">
                    
                        <MenuItem label="Services" Icon={MdMiscellaneousServices} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    </Link>
                    <Link to = "/Contact"  className=" text-black">
                       <MenuItem label="Contact" Icon={MdContactMail} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                         
                    </Link>
                    

                    <MenuItem label="Se Connecter" Icon={TbLogin2} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
            </div>
            
            {/* Menu Mobile */}
            {isopenMenu && <MobileMenu  setActiveMenu={setActiveMenu} activeMenu={activeMenu} />}
        </>
    );
};

export default NavBar;
