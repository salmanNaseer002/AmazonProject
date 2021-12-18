import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import Footer from "../core/Footer";
import { getProducts, deleteProduct } from "./apiAdmin";
import './AdminDashboard.css';
import Particles from './Particles';
import './Particle.css';
const ViewAllProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

   

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div style={{background:'#d6e7f5'}}>
        <Layout
        title="MarketPlace For AlphaD&D."
        description='marketplace for react themes and plugins made in AlphaD&D, which is a web based application, used to make themes and plugins by simply dragging and dropping options.'
        className="container-fluid"
        />
<Particles height='1000pxs'></Particles>
        <div style={{paddingTop:'50px',marginBottom:'5%'}} className='container'>
        <h2 className="text-center">
             Total Products : <span style={{color:'yellowgreen'}}> {products.length}</span>
                </h2>
             <hr />

             <div style={{padding:'7px',fontWeight:'600',backgroundColor:'#262626',color:'white',fontSize:'1.3rem',marginBottom:'3px'}} className='row'>
                 <span className='col-7'>Products</span>
                 
                
             </div>
            <div     className="row ">
                <div className="col-12">
                    
                   
                        {products.map((p, i) => (

                            <div key = {i} className = 'row Row-style'> 

                            <div className='col-7'>
                            <strong>{p.name}</strong>
                            </div>
                           
                                
                                
                                

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

export default ViewAllProducts;