import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
import moment from "moment";
import './Dashboard.css';
import Particles from '../admin/Particles';
import '../admin/Particle.css';

const Seller = () => {
    

    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    const token = isAuthenticated().token;

    

    

    const userLinks = () => {
        return (
            <div className="card mb-5">
                <h4 className="card-header User-header">User Links</h4>
                <ul className="list-group">
                    
                    <li className="list-group-item">
                        <Link className="nav-link User-link" to={`/becomeSeller/${_id}`}>
                            start Selling
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    

    

    return (
        <div>
        <Layout
            title="Prep Centre Management System."
            description='Prep Centre to keep products, which is a web based application. Prep is the process of getting your inventory ready to send into Amazon.'
             className="container-fluid"
        />
<div style={{background:'#f5f9fc',height:'1200px'}}>
        <Particles height ='1200px'></Particles>
            <div style={{paddingTop:'5%'}}className ='container'>
            <div className="row">
                <div className="col-md-4">{userLinks()}</div>
               
            </div>
            </div>
            </div>
            </div>
    );
};

export default Seller;