import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import Footer from "../core/Footer";
import { Link } from "react-router-dom";
import { listOrdersSeller } from "./apiAdmin";
import moment, { max } from "moment";
import './AdminDashboard.css';
import Particles from './Particles';
import './Particle.css';

const SellerOrders = () =>
{
    const [orders, setOrders] = useState( [] );


    const { user, token } = isAuthenticated();

    const loadOrders = () =>
    {
        listOrdersSeller( user._id, token ).then( data =>
        {
            if ( data.error )
            {
                console.log( data.error );
            } else
            {
                setOrders( data );
            }
        } );
    };



    useEffect( () =>
    {
        loadOrders();
        //loadStatusValues();
    }, [] );

    const showOrdersLength = () =>
    {
        if ( orders.length > 0 )
        {
            return (
                <h3 style={{ fontWeight: '700', color: '#262626', fontSize: '2.4rem', PaddingTop: '20px', textAlign: 'center' }}>
                    <span style={{ color: 'yellowgreen' }}>{user.name} Orders Are Here </span>
                </h3>
            );
            // return (
            //     <h3  style={{fontWeight :'700',color:'#262626',fontSize:'2.4rem',PaddingTop:'20px'}}>
            //         Total orders:<span style={{color:'yellowgreen'}}> {orders.length}</span>
            //     </h3>
            // );
        } else
        {
            return (
                <div style={{ height: '2000px' }}>
                    <h3 style={{ fontWeight: '700', color: '#262626', fontSize: '3.4rem', marginLeft: '30%' }}>No orders Yet!!!</h3>
                    <div style={{ fontWeight: '700', color: '#262626', fontSize: '300px', marginLeft: '34%' }}><i class="far fa-meh"></i></div>
                </div>
            );

        }
    };

    const showInput = ( key, value ) => (

        <div>
            {`${ key } : `} {value}
        </div>


    );
    const showOrderDetails = ( o ) =>
    {
        for ( let i = 0; i < o.products.length; i++ )
        {


            if ( o.products[i].userId === user._id )
            {
                return (
                    <div>
                        <ul className="list-group Order-detail">

                            <li className="list-group-item Order-header"><h2>Order Details</h2></li>
                            <li className="list-group-item Order-li">
                                Transaction ID: {o.transaction_id}
                            </li>
                            <li className="list-group-item Order-li">
                                Amount: ${o.amount}
                            </li>
                            <li className="list-group-item Order-li">

                            </li>
                            <li className="list-group-item Order-li">
                                Ordered on:{" "}
                                {moment( o.createdAt ).fromNow()}
                            </li>
                            <li className="list-group-item">
                                Country: {o.address}
                            </li>

                        </ul>
                    </div>

                );


            }

        }
    }
    const showOrdersProduct = ( p ) =>
    {
        if ( p.userId === user._id )
        {
            console.log( p.userId );
            console.log( user._id );
            return (
                <div>
                    <li className="list-group-item Order-header"><h2>Product Details</h2></li>

                    <li className="list-group-item Order-li">
                        {showInput( "Product name ", p.name )}
                    </li>
                    <li className="list-group-item Order-li">
                        {showInput( "Product price", p.price )}
                    </li>

                    <li className="list-group-item Order-li">
                        {showInput( "Product Id", p._id )}
                    </li>
                </div>

            );
        }
    };


    return (
        <div style={{ background: '#d6e7f5' }}>
            <Layout
                title="MarketPlace For AlphaD&D."
                description='marketplace for react themes and plugins made in AlphaD&D, which is a web based application, used to make themes and plugins by simply dragging and dropping options.'
                className="container-fluid"

            />

            <Particles height='500px'></Particles>
            <div style={{ marginBottom: '10%' }} className='Order-data'>
                <div className='container'>

                    {showOrdersLength()}
                    <div className="row">
                        <div className="col-md-8 offset-md-2 ">

                            {orders.map( ( o, oIndex ) =>
                            {
                                return (
                                    <div
                                        className="mt-1 mb-2 "
                                        key={oIndex}

                                    >

                                        {showOrderDetails( o )}




                                        {o.products.map( ( p, pIndex ) => (

                                            <div

                                                key={pIndex}

                                            >
                                                <ul className="list-group Product-detail">
                                                    {showOrdersProduct( p )
                                                    }
                                                    {console.log( p )}
                                                    {console.log( p.userId )}
                                                    {console.log( user._id )}
                                                </ul>
                                            </div>
                                        ) )}
                                    </div>
                                );
                            } )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default SellerOrders;