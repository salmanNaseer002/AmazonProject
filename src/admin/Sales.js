
import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { Link, Redirect } from 'react-router-dom';
import './AdminDashboard.css';
import Footer from "../core/Footer";
import Particles from '../admin/Particles';
import { isAuthenticated } from "../auth";
import { getProducts } from "./apiAdmin";
import '../admin/Particle.css';
import UpdateProductSales from './UpdateProductSales';
const Sales = () => {

    const [values, setValues] = useState({
        percentage: '',
        date: '',
        
        error: false,
        success: false,
        submitted: false,
    });
    const [products, setProducts] = useState([]);

    const { token } = isAuthenticated();
    const { percentage,date, error, success, submitted} = values;

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

    
    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };
    
    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, submitted: true});
       
        console.log("submitted");
        
       

       
        
    };
    
    const redirectUser = submitted => {
        console.log(submitted);
        if (submitted) {
            console.log(values.date);
            return <UpdateProductSales match={products} date={date} percentage={values.percentage} />
        }
        
        else {
            return(<form>
                <div className="form-group">
                    
                    <input type="text" placeholder = 'Percentage' onChange={handleChange('percentage')} className="form-control Profile-input" />
                </div>
                <div className="form-group">
                    
                    <input type="date" placeholder = 'End Date of Sale' onChange={handleChange('date')} className="form-control Profile-input" />
                </div>
                
    
                <button onClick={clickSubmit} className="btn btn-block Profile-btn">
                    Submit
                </button>
            </form>); 
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
              
               {submitted ?  <h2 style={{color:'yellowgreen'}} className="mb-4 Profile-header">Sales Are Added !!</h2> :  <h2 className="mb-4 Profile-header">Sales</h2>}
            
            {redirectUser(submitted)}
            
        
            </div>
            </div>
            </div>
            
            </div>
            <Footer></Footer>
        
            </div>
        
    );
};

export default Sales;