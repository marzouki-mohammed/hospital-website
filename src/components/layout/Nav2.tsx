
const Nav2 = () => {
    
    return (
      <>
        
            <div className="row align-items-center" style={{ height: "10vh", width: "100vw" }}>
                <div className="col text-center">
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
                </div>
            </div>



      {/* <div className='m-2 p-1 border rounded-3 bg-body-tertiary'> 
        <div className="row" style={{height:"10vh" , width:"100wv"}}>
          <div className="col-5 d-md-none co align-content-center" style={{marginTop:"13px"}}>
            <button className='border-0 bg-body-tertiary fs-4' onClick={handlerClickMenu}>
                   <FaRegWindowClose className={isopenMenu ? "d-block" : "d-none"} />
                   <TfiMenu className={!isopenMenu ? "d-block" : "d-none"}/>
            </button>
          </div>
          <div className="col-7 col-md-12 align-content-center">
                <svg width="200"  viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg" className='p-0 m-0'>
                    <text x="10" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">DO</text>
                    <text x="75" y="50" font-family="Arial" font-size="50"  fill="black">C</text>      
                    
                    <path d="M170 35 Q75 80, 70 30 T90 20" stroke="black" stroke-width="4" fill="none"/>
                    <circle cx="106" cy="27" r="5" fill="blue"/>
                    <circle cx="106" cy="40" r="5" fill="blue"/>
                    
                    <text x="116" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">T</text>
                    <text x="143" y="50" font-family="Arial" font-size="52" font-weight="bold" fill="black">O</text>                
                    
                    <circle cx="163" cy="32" r="7" stroke="black" stroke-width="4" fill="white"/>
                    <circle cx="163" cy="32" r="4" fill="blue"/>
                    <text x="182" y="50" font-family="Arial" font-size="40" font-weight="bold" fill="black">R</text>
                </svg>
  
          </div>
          
        </div>
        <div className="mobile-menu-content">
          {isopenMenu &&
                <motion.nav className="m-2 p-1 border rounded-3 bg-body-tertiary h-100"
                         initial={{x:-400}}
                         animate={{x:0}}
                         transition={{duration:0.3, ease:"linear"}}
                         exit={{x:-400}}
                >  
                     <div className="row p-3">
                        <div className="col-12 mb-5">
                          <div className="d-flex flex-column border rounded-3 bg-white">
                            <div
                              className={`p-3 border-bottom rounded-top-3 fs-5 d-flex align-items-center gap-2 ${
                                activeMenu === "Home" ? "acliveMenu" : ""
                              }`}
                              onClick={() => setActiveMenu("Home")}
                            >
                              <CiHome className="fs-4" /> Home
                            </div>
  
                            <div
                              className={`p-3 border-bottom fs-5 d-flex align-items-center gap-2 ${
                                activeMenu === "Services" ? "acliveMenu" : ""
                              }`}
                              onClick={() => setActiveMenu("Services")}
                            >
                              <MdMiscellaneousServices className="fs-4" /> Services
                            </div>
  
                            <div
                              className={`p-3 border-bottom rounded-bottom-3 fs-5 d-flex align-items-center gap-2 ${
                                activeMenu === "Contact" ? "acliveMenu" : ""
                              }`}
                              onClick={() => setActiveMenu("Contact")}
                            >
                              <MdContactMail className="fs-4" /> Contact
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex gap-1"
                               
                        >
                             <motion.button 
                                  className="login-btn border rounded-3 bg-white p-3 w-50 fs-5 d-flex align-items-center gap-2"
                                  initial={{ scale: 1 }}
                                  whileTap={{ scale: 1.2 }}
                                >
                                  <TbLogin2 className="fs-4" /> Login
                            </motion.button>
  
                             <motion.button className="login-btn border rounded-3 bg-white p-3 w-50 fs-5 d-flex align-items-center gap-2"
                                  initial={{scale:1}}
                                  whileTap={{scale:1.2}}
                             ><TbLogin className="fs-4" />Sing In</motion.button>
                        </div>
                        
                     </div>
                     
  
                         
                </motion.nav>
          }
        </div>
        
           
           
  
      </div> */}
    
      </>
    )
}

export default Nav2