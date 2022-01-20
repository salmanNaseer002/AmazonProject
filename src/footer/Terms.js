import React from 'react';
import Layout from '../core/Layout';
import Footer from '../core/Footer';
import logo from  './aboutpic2.jpeg'

const  Terms = () => {
    return ( 
        <div> 
        <Layout 
             title="Alpha DnD Market Terms"
             description="A low code to zero code software development platform for mobile and web development without writing a single line of code."
             className="container-fluid"
        />
        <div className="container  mt-3 ">
        <div className="row">
            <div className="col-md-10 mt-2 border mx-auto">            
            <h1 className="border-bottom"><img src={logo} height="5%" width="5%"  className="mr-4 mb-1"/>Market Terms</h1>
            <h3 className="text-justify mt-4">Welcome to Prep Centre Management System
            </h3>
            <p className="text-justify mt-4">
                1. Hi, we’re Envato and welcome! We’re happy to have you here and we hope you enjoy your stay. 
                When we say ‘we’, ‘us’ or ‘Envato’ it’s because that’s who we are and we own and run the Envato Market sites.
            </p>
            <p>
                2. Envato’s ecosystem of digital marketplaces helps millions of people around the world get creative and earn 
                online. When you create an account and accept these terms you become a member of our community. You will have an 
                Envato Market account that will allow you to buy and sell items like the ones found on the Envato Market sites and 
                make other related transactions.
            </p>
            <p>
                3. The Envato Market sites are platforms that allow members to buy and sell licenses to use digital items like website 
                themes, production music, motion graphics project files, software code, vectors, images and much, much more. On Envato 
                Market, buyers and authors (sellers) transact with each other directly and we provide the platform to allow the 
                transactions to happen. If you have an Envato Market account, any transactions are logged on your member’s statement, 
                which records the payments made by you to authors via Envato Market (as a buyer) and by buyers via Envato Market to you
                 (as an author).
            </p>
            <p>
                4. The items on Envato Market are owned by the authors, not by us. The items on Envato Market are uploaded at the 
                direction of the author. We provide the platform services; we do not take ownership of the items.
            </p>
            <p>
                5. During your time with us you agree to follow the ground rules outlined in these terms so please read and understand 
                them. If you don’t accept the terms then we’ll be sad, but you will need to leave because your presence on and use of 
                the Envato Market sites is conditional on your acceptance to be bound by these terms and the Acceptable Use Policy whether
                 you become a member or not.
             </p>
             
            </div>
            
        </div>
        


        </div>
        {/* container end */}
        <Footer />
        </div>
     );
}
 
export default Terms;