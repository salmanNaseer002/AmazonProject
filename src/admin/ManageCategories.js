import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import Footer from "../core/Footer";
import { getCategories } from "./apiAdmin";
import Particles from './Particles';
import './Particle.css';

const ManageCategories = () => {
    const [categories, setCategories] = useState([]);

    const { user, token } = isAuthenticated();

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                setCategories(data);
            }
        });
    };

    

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <div style={{background:'#d6e7f5'}}>
        <Layout
        title="Prep Centre Management System."
        description='Prep Centre to keep products, which is a web based application. Prep is the process of getting your inventory ready to send into Amazon.'
        className="container-fluid"
        />
        <Particles height='700px'></Particles>
        <div style={{paddingTop:'50px',marginBottom:'5%'}} className='container'>

        <h2 className="text-center">
             Total categories : <span style={{color:'yellowgreen'}}> {categories.length}</span>
                </h2>
             <hr />

             <div style={{padding:'7px',fontWeight:'600',backgroundColor:'#262626',color:'white',fontSize:'1.3rem',marginBottom:'3px'}} className='row'>
             <span className='col-1'></span>
                 <span className='col-6'>Products</span>
                 <span className='col-2'></span>
                 <span style={{textAlign:'center'}}className='col-2'>Update</span>
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
                                <Link to={`/admin/category/update/${c._id}`}>
                                   
                                    <i class="far fa-edit"></i> 
                                    
                                </Link>
                                </span>
                                
                                <span className='col-1'></span>
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

export default ManageCategories;