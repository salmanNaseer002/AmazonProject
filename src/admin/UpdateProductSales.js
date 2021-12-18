import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { getProduct, getCategories, updateProductSalesProduct } from './apiAdmin';
import './AdminDashboard.css';
import Particles from './Particles';
import './Particle.css';


const UpdateProductSales = ({ match, date, percentage }) => {
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
   const[v, setV] = useState(true);
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

    
    

    // load categories and set form data
    const initCategories = (product) => {
        console.log("new price");
        console.log((product.price) - (product.price*(percentage/100)))
        setPrice((product.price) - (product.price*(percentage/100)));
        
        
        console.log(percentage);
        console.log(date);
        console.log(price);
        updateProductSalesProduct(product._id, user._id, token, Math.floor(((product.price) - (product.price*(percentage/100)))), percentage,date).then(data => {
            
                console.log(data);
              
               
            
        });
    };

    useEffect(() => {
        {match.map((p, i) => (
            <div
                 key={i}
                 className="list-group-item d-flex justify-content-between align-items-center"
            >
           
            
            
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

export default UpdateProductSales;