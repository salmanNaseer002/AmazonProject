import React, { useState, useEffect } from "react";
import Card from './Card';
import Layout from './Layout';
import Footer from "./Footer";
import { isAuthenticated } from '../auth';

import {  getWishlist, removeWishlist } from './apiCore';

import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import './Home.css';

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const[check, setCheck] = useState(false);
  
  const  {user,token}  = isAuthenticated() && isAuthenticated()
  
  
  const loadWishlist = () =>
    getWishlist(user._id, token).then(res => {
        
            console.log(res.wishlist);
          
            setWishlist(res.wishlist);
            if(wishlist){
              setCheck(true);
            }
        
      
    });

  const destroy = (productId) =>
    removeWishlist(productId, user._id,token).then((res) => {
        console.log("in remove");
        console.log(productId);
      loadWishlist();
    });
    useEffect(() => {
        loadWishlist();
    }, []);

    const wishlistfunction = (p) => {
      if(p){
       return(
         <div>
            <Card wishlist ='true' product={p}/>
        <button
        style={{border:'none',marginTop:'0px',boxShadow:' 0 8px 8px rgba(0, 0, 0, 0.2 )'}} 
                onClick={() => destroy(p._id)}
                className="btn btn-block card Wishlist-button "
              >
                <grid className='container'>
                <i style={{marginRight:'5px'}}
                 class="fa fa-trash" aria-hidden="true"></i>
                 <span style={{margin:'auto'}}>Delete From Wishlist</span> 
                </grid>
        </button>

        
         </div>
       
       
       ); 
      }
      
    }

  return (
    <div>
    <Layout
    title="Prep Centre Management System."
    description='Prep Centre to keep products, which is a web based application. Prep is the process of getting your inventory ready to send into Amazon.'
    className="container-fluid"
    />
    <div className="mt-5 mb-5 container">
      
    <h4 style={{fontWeight :'700'}} className='mb-4'>Wishlist</h4>
      <div className="row">
        
         {wishlist.map((p,i) => (
           
           <div key={i} className="col-md-4">
             {wishlistfunction(p)}
             
           </div>
         ))}
       </div>
     </div>
     <Footer></Footer>
     </div>
  
  );
};

export default WishList;
