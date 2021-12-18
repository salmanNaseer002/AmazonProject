import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { getUser, updateCategory } from './apiAdmin';
import Particles from './Particles';
import './Particle.css';
// {category: ["5cd0258f2793ec6e100bc191"], price: []}
// http://localhost:3000/admin/category/update/5cd0258f2793ec6e100bc191
const UserProfile = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        email:'',
        role:0,
        history:[],
        _id: '',
        error: '',
     
        
    });

    // destructure user and token from localStorage
    const { user, token } = isAuthenticated();

    

    const init = userId => {
        getUser(userId, token).then(data => {
            
                // populate the state
                console.log(data);
                setValues({
                    ...values,
                    name: data.name,
                    email: data.email,
                    role:data.role,
                    _id: data._id
                });
            
        });
    };

    useEffect(() => {
        init(match.params.userId);
        console.log(match.params.userId);
    }, []);

    
    
        

    

    
    const goBackBTN = () => {
        return (
            <div className="mt-5">
                <Link to="/admin/categories" className="text-info">
                    Back To Admin
                </Link>
            </div>
        );
    };

    return (
        <div style={{background:'#d6e7f5',height:'900px'}}>
        <Layout
        title="MarketPlace For AlphaD&D."
        description='marketplace for react themes and plugins made in AlphaD&D, which is a web based application, used to make themes and plugins by simply dragging and dropping options.'
        className="container-fluid"
        />
        <Particles height='500px'></Particles>
            <div style={{paddingTop:'50px'}} className="row">
               
                   
                        {values.name}
                   
                   
                        {values.email}
                    
                   
                        {values.role}
                 
                   
                        
                   

               
           
            <div className="row">
                <div className="col-md-8 offset-md-2 m-b-250 mb-5">
                    
                   
                    {goBackBTN()}
                   
                </div>
            </div>
            </div>
            </div>
    );
};

export default UserProfile;