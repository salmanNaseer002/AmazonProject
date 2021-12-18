import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import Footer from "../core/Footer";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getSellers } from "./apiAdmin";
import Particles from './Particles';
import './Particle.css';


const ManageSellers = () => {
    const [categories, setCategories] = useState([]);

    const { user, token } = isAuthenticated();

    const loadUsers = () => {
        getSellers(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                setCategories(data);
            }
        });
    };

    

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div style={{background:'#d6e7f5',height:'1000px'}}>
        <Layout
        title="MarketPlace For AlphaD&D."
        description='marketplace for react themes and plugins made in AlphaD&D, which is a web based application, used to make themes and plugins by simply dragging and dropping options.'
        className="container-fluid"
        />
        <Particles height='500px'></Particles>
        <div style={{paddingTop:'50px',width : '50%',marginBottom :'10%'}} className='container'>
        <h2 className="text-center">
             Total Sellers : <span style={{color:'yellowgreen'}}> {categories.length}</span>
                </h2>
             <hr />
             <div style={{padding:'7px',fontWeight:'600',backgroundColor:'#262626',color:'white',fontSize:'1.3rem',marginBottom:'3px'}} className='row'>
             <span className='col-1'></span>
                 <span className='col-6'>Sellers</span>
                 <span className='col-2'></span>
                 <span style={{textAlign:'center'}}className='col-2'>See Profile</span>
                 <span className='col-1'></span>
             </div>

            <div className="row">
                <div className="col-12">
                   
                    
                        {categories.map((c, i) => (
                            <div
                                key={i}
                                className="row Row-style"
                            >
                            <span className='col-1'></span>
                            <div className='col-6'>
                                <strong>{c.name}</strong>
                            </div>
                            <span className='col-2'></span>
                            <span  style={{textAlign:'center'}} className = 'col-2'>
                                <Link to={`/admin/user/profile/${c._id}`}>
                                    
                                <i style={{color:'yellowgreen'}} class="far fa-eye"></i>
                                    
                                </Link>
                                </span>
                            </div>
                        ))}
                  
                    <br />
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageSellers;