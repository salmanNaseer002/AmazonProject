
import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import Footer from "../core/Footer";
import { Link, Redirect } from 'react-router-dom';
import './AdminDashboard.css';
import Particles from '../admin/Particles';
import { isAuthenticated } from "../auth";
import { getProducts } from "./apiAdmin";
import '../admin/Particle.css';
import RemoveProductSales from './RemoveProductSales';
const RemoveSales = () => {

    const [values, setValues] = useState({
        percentage: '',
        preprice: '',
        
        error: false,
        success: false,
        submitted: false,
    });
    const [products, setProducts] = useState([]);

    const { token } = isAuthenticated();
    const { percentage,preprice, error, success, submitted} = values;

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

    
    
    
    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, submitted: true});
        console.log("submitted");
        
       

       
        
    };
    
    const redirectUser = submitted => {
        console.log(submitted);
        if (submitted) {
           
              return <RemoveProductSales props={products} />
        }
        
        else {
            return(<div>
                
                 <h4 style={{color:'yellowgreen'}}>Are you sure to Remove Sales ????</h4>
                
    
                <button onClick={clickSubmit} className="btn btn-block Profile-btn">
                    Remove Sales
                </button>
            </div>); 
        }

    };

    
    

    return (
        <div>
        <Layout
        title="MarketPlace For AlphaD&D."
        description='marketplace for react themes and plugins made in AlphaD&D, which is a web based application, used to make themes and plugins by simply dragging and dropping options.'
        className="container-fluid"
        /> 
        
        
      <div style={{height:'500px',background:'#d6e7f5'}}>
        <Particles height ='500px'/>
        <div  style={{padding:'5%'}} className='container'>
           <div   className ='row' >
               <div style={{margin:'auto'}} className='col-8'>
              
            {submitted ?  <h2 style={{color:'yellowgreen'}} className="mb-4 Profile-header">Sales Are Removed !!</h2> :  <h2 className="mb-4 Profile-header">Remove Sales</h2>}
            
            {redirectUser(submitted)}
            
        
            </div>
            </div>
            </div>
            
            </div>
            <Footer></Footer>
        
            </div>
        
    );
};

export default RemoveSales;