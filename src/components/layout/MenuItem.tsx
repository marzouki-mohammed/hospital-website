// import { useState } from "react";


// interface MenuItemProps {
//     label: string;
//     Icon: any;
//     activeMenu: string;
//     setActiveMenu: (menu: string) => void;
// }

// const MenuItem = ({ label, Icon, activeMenu, setActiveMenu }: MenuItemProps) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             className={`menu-item ${activeMenu === label ? "active" : ""}`}
//             onClick={() => setActiveMenu(label)}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <div className="icon-container">
//                 <Icon className="fs-2" />
                
//             </div>
//             {isHovered && (
//             <div className="position-absolute p-1 bg-black text-white mt-1 rounded-2" style={{top:"50px"}}>
//                     {label}
//                     <div className="tooltip-arrow"></div>
//             </div>
//             )}
//         </div>
//     );
// };

// export default MenuItem;



import { useState } from "react";

interface MenuItemProps {
    label: string;
    Icon: any;
    activeMenu: string;
    setActiveMenu: (menu: string) => void;
}

const MenuItem = ({ label, Icon, activeMenu, setActiveMenu }: MenuItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`menu-item ${activeMenu === label ? "active" : ""}`}
            onClick={() => setActiveMenu(label)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="icon-container">
                <Icon className="fs-2" />
            </div>
            {isHovered && (
                <div className="position-absolute p-1 bg-black text-white mt-1 rounded-2" style={{ top: "50px" }}>
                    {label}
                    <div className="tooltip-arrow"></div>
                </div>
            )}
        </div>
    );
};

export default MenuItem;

