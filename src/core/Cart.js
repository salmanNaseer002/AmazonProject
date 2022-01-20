import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';
import Footer from "./Footer";
import { signout, isAuthenticated } from "../auth";
const Cart = () =>
{
    const [items, setItems] = useState( [] );
    const [run, setRun] = useState( false );
    const { user, token } = isAuthenticated();
    useEffect( () =>
    {
        setItems( getCart() );
    }, [run] );

    const showItems = items =>
    {
        return (
            <div>
                <h2 style={{ fontWeight: '650' }}>Your cart has {`${ items.length }`} items</h2>
                <hr />
                {items.map( ( product, i ) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ) )}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2 style={{ fontWeight: '650' }}>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>            
    );

    return (
        <div>
            <Layout
               title="Prep Centre Management System."
               description='Prep Centre to keep products, which is a web based application. Prep is the process of getting your inventory ready to send into Amazon.'
                className="container-fluid"
            />

            <div style={{ paddingTop: '3%' }} className='container'>
                <div className="row">
                    <div className="col-lg-5">{items.length > 0 ? showItems( items ) : noItemsMessage()}</div>
                    <div className='col-lg-2'></div>
                    <div className="col-lg-5">
                        <h2 style={{ fontWeight: '650' }} className="mb-4">Your cart summary</h2>
                        <hr />
                        <Checkout products={items} setRun={setRun} run={run} />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;