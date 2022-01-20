import React from "react";
import {Link} from "react-router-dom";
import logo from  '../footer/blacklogo.png'


const Footer = () => {
  return (
    <div className=" text-white text-center text-lg-start container-fluid" style={{padding:"0.2px",backgroundColor: "#1A1A1A"}}>
  
  <div className="container ">

    

    <div className="row " style={{marginTop:"57px",}}>
     
      <div className="col-md-3 mb-4 " >
        <img src={logo} height="20%" width="30%"  className="mr-4 mb-2"/>

        <p style={{color:"#a3a0a0",fontSize:"15px"}} className="text-justify mt-1">
          Prep centre management system is a part of Amazon prep centre. It offers a plenty of web services. So Join us and become a part of Prep centre management system.
        </p>
      </div>
     

     
      <div className="col-md-3 mb-4 mb-md-0 "  >
        <h6 className="text-justify" style={{marginLeft:"70px"}}>Prep Centre</h6>

        <ul className="list-unstyled text-justify mb-0 font-weight-normal " style={{marginLeft:"70px"}}>
          
          <li>
            <Link   className="text" style={{color:"#a3a0a0"}} to="/shop">Products</Link>
          </li>
          
        </ul>
      </div>
      
      <div className="col-md-3 mb-4 mb-md-0 ">
        <h6 className="text-justify " style={{marginLeft:"70px"}}>Support</h6>

        <ul className="list-unstyled text-justify mb-0 font-weight-normal" style={{marginLeft:"70px"}} >
          <li>
            <a className="text" style={{color:"#a3a0a0"}} href="http://alphadnd.com/">Prep Centre Timeline</a>
          </li>
          
          <li>
            <Link   className="text" style={{color:"#a3a0a0"}} to="/switchToSeller/:userId">Selling on Prep Centre</Link>
          </li>
          <li>
            <Link   className="text" style={{color:"#a3a0a0"}} to="/switchToBuyer/:userId">Buying on Prep Centre Management System</Link>
          </li>
        </ul>
      </div>    
      
      <div className="col-md-3 mb-4 mb-md-0 ">
        <h6 className="text-justify " style={{marginLeft:"70px"}}>About</h6>

        <ul className="list-unstyled text-justify mb-0 font-weight-normal" style={{marginLeft:"70px"}} >
          <li>
            <Link className="text" style={{color:"#a3a0a0"}} to="/careers">Careers</Link>
          </li>
         
          <li>
            <Link   className="text" style={{color:"#a3a0a0"}} to="/about">About Prep Centre</Link>
          </li>
          
        </ul>
      </div>   
    </div>

    <div className="row  mt-2 " style={{backgroundColor:"#232426"}}>

        <div className="col-md-6 mt-2   mb-2 "> 
          <h6 className="text-center text-warning  mt-2">Get connected with us on Social Links</h6>
        </div>

        <div className="col-md-6 mt-2 mx-auto  mb-2 ">
          <div className="mt-1 text-right mr-4">
                            <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook fa-2x text-primary mx-2 "></i></a>                            
                            <a href="#" target="_blank"><i className="fab fa-google-plus fa-2x text-danger mx-2 "></i></a>
                            <a href="https://twitter.com/?lang=en" target="_blank"><i className="fab fa-twitter fa-2x text-info mx-2 "></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-2x text-danger mx-2 "></i></a>
                            <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube fa-2x text-danger mx-2 "></i></a>
          </div>
        </div>
     </div>
   
  </div>
  

 
  <div className="text-center p-3 font-weight-normal" style={{fontFamily:"sans-serif",fontSize:"14px"}}>
    © 2021 Prep Centre Management System.
    <Link to="/" style={{textDecoration:"none",color:"#a3a0a0"}}> Trademarks and brands are the property of their respective owners.
</Link>
  </div>
  
</div>

  );
}

export default Footer;