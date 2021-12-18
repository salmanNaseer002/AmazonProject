import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import Footer from "../core/Footer";
import { Link, Redirect } from 'react-router-dom';
import { getProduct, getCategories, removeProductSale } from './apiAdmin';
import './AdminDashboard.css';
import Particles from './Particles';
import './Particle.css';


const RemoveProductSales = ( {props} ) => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        
        
        percentage:'',
        categories: [],
        category: '',
        
        
        photo: '',
        loading: false,
        error: false,
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });
   const [price, setPrice] = useState('');
    const { user, token } = isAuthenticated();
    const {
        name,
        description,
        
        
        
        // categories,
        
        
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    console.log(props);
    

    // load categories and set form data
    const initCategories = (product) => {
        console.log("new price");
        console.log(product);
        console.log((product.price) + (2*(product.price*(product.percentage/100))))
        setPrice((product.price) + (2 * (product.price*(product.percentage/100))));
        
        
        
       
        removeProductSale(product._id, user._id, token, Math.floor(((product.price) + (2*(product.price*(product.percentage/100)))))).then(data => {
            
                console.log(data);
               
            
        });
    };

    useEffect(() => {
        {props.map((p, i) => (
            <div
                 key={i}
                 className="list-group-item d-flex justify-content-between align-items-center"
            >
           
            {console.log(p)}
            
            {initCategories(p)}                     
           </div>
       ))}
        
    },[]);
    

    
    

    

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
            {/* <h2>{`${createdProduct}`} is updated!</h2> */}
        </div>
    );

    

    return (

        <div>
       
        <div style={{background:'#d6e7f5'}}>
            <Particles height='440px'></Particles>
        <div style={{paddingTop :'6%',paddingBottom:'6%'}} className='container'>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                   
                    {showSuccess()}
                    {showError()}
                    
                    
                    
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default RemoveProductSales;