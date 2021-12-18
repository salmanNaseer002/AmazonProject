import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import "../styles.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './MenuStyle.css';
import logo from  '../footer/blacklogo.png'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#FFFFFF" };
    } else {
        return { color: "#a3a0a0" };
    }
};

const isYellow = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#F07D17" };
    } else {
        return { color: "#959595" };
    }
};

const {userId} = isAuthenticated();
const Menu = ({ history }) => (
    

    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" style={{paddingRight:'2%',paddingLeft:'2%',paddingTop:"0",paddingBottom:"0",fontWeight:'600',fontSize:'large'}}>
    <span style={{padding:'15px',paddingRight:'1px'}} className="nav-item navbtn">    
    <Navbar.Brand
                       
                       className="nav-link navbtn"
                       style={isActive(history, "/")}
                       href="http://alphadnd.com/"
                   >Alpha DnD  
                <img src={logo} height="20%" width="30%" className=""/> 
                   
    </Navbar.Brand>   
    </span> 

       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav" >
       <Nav > 
           <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">
                <Link
                    className="nav-link navbtn"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </span>
            
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">
                <Link
                    className="nav-link navbtn"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
                </Link>
            </span>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">
               <Link
                   className="nav-link navbtn"
                   style={isActive(history, "/seller/dashboard")}
                   to="/seller/dashboard"
               >
                   Become a Seller
               </Link>
            </span>   

            )}
            
            {isAuthenticated() && isAuthenticated().user.role === 2 && isAuthenticated().user.seller &&(
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">    
                    <Link
                        className="nav-link navbtn"
                        style={isActive(history, "/switchToBuyer/:userId")}
                        to={`/switchToBuyer/${userId}`}
                    >
                        Switch to Buyer
                    </Link>
            </span>        
                
            )}
            
            {isAuthenticated() && isAuthenticated().user.role === 2 && isAuthenticated().user.seller !== true &&(
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">    
                    <Link
                        className="nav-link navbtn"
                        style={isActive(history, "/switchToSeller/:userId")}
                        to={`/switchToSeller/${userId}`}
                    >
                        Switch to Selling
                    </Link>
            </span>        
                
            )}

        </Nav>
        <Nav className="ml-auto">
        
        <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">    
                
                <Link
                    className="nav-link navbtn"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    <i className="fas fa-shopping-cart "></i>{" "}
                    <sup>
                        <span className="badge badge-2x" style={isYellow(history, "/cart") }><span  style={{ fontSize:16}}>{itemTotal()}</span></span>
                        
                    </sup>
                </Link>
        </span>    

            {isAuthenticated() && isAuthenticated().user.role === 0 && isAuthenticated().user.seller !== true && (
               
               <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">         
                    <Link
                        className="nav-link navbtn"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </span>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">      
                    <Link
                        className="nav-link navbtn"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
            </span>    
            )}
            {isAuthenticated() && isAuthenticated().user.role === 2 && isAuthenticated().user.seller &&(
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">     
                    <Link
                        className="nav-link navbtn"
                        style={isActive(history, "/seller_user/dashboard")}
                        to="/seller_user/dashboard"
                    >
                        Seller Dashboard
                    </Link>
            </span>        
                
            )}
            {isAuthenticated() && isAuthenticated().user.role === 2 && isAuthenticated().user.seller !== true &&(
                
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">      
                    <Link
                        className="nav-link navbtn"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        User Dashboard
                    </Link>
            </span>        
                
            )}

            {!isAuthenticated() && (
                <Fragment>
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">          
                        <Link
                            className="nav-link navbtn"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
            </span>        

            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">          
                        <Link
                            className="nav-link navbtn"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                </span>    
                </Fragment>
            )}
             
            {isAuthenticated() && (
            <span style={{padding:'15px',paddingRight:'3px'}} className="nav-item navbtn">      
                    <span
                        className="nav-link txt-light navbtn"
                        style={{ cursor: "pointer", color: "white"  }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </span>
            </span>    
            )}
        
        </Nav>
        </Navbar.Collapse>
        </Navbar>
);

export default withRouter(Menu);