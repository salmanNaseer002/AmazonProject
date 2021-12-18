import React from 'react';
import Menu from '../core/Menu';
import Layout from '../core/Layout';
import Footer from '../core/Footer';
import logo from  './aboutpic2.jpeg'
import Job from  './jobsIcon.png'
import './footer.css'
const  Careers = () => {
    return ( 
        <div> 
        {/* <Menu /> */}
        <Layout title="AlphaDnD Marketplace Career Opportunities" description="Our proven techniques used in the past projects give us confidence in the quality and effectiveness of our design, development and deployment processes."/>
        <div className="container  mt-3 ">
        <div className="row">
            <div className="col-md-12 mt-2 ">            
                <h1 className=" text-primary text-center"><img src={logo} height="5%" width="5%"  className="mr-4 mb-1"/>Careers</h1>
                <h3 className="mt-4 greyColor">Come and join with Innovative and Passionate people who strive and learn for Purpose and Profit. 
                </h3>   
            </div>            
        </div>
        
        <div className="row">
            <div className="col-md-6 mt-2 ">            
                <p className="greyColor size22 border-right ">Envato is one of the world's leading online creative communities for tools, templates and talent.</p>
            </div>
            <div className="col-md-6 mt-2 ">            
                <p className="greyColor text-justify ">We want to help creators bring ideas to life and earn a living doing what they love, 
                    to be the place where anyone can get their creative projects done, and where our community 
                    earns every time that happens.
                </p>
            </div>            
        </div>


        <div className="row ">
            <div className="col-md-12 mt-2 ">            
                {/* <h5 className="text-primary text-center mt-5 ">Perks and Previleges</h5> */}
                <h1 className=" mt-5 ">Why work here?</h1>
                <h2 className="text-muted mt-3" >Here are a few reasons</h2>
            </div>                      
        </div>

        <div className="row mt-5 border">
            <div className="col-md-4 border-right">            
                <i className="fas fa-hand-holding-heart fa-3x mt-2"></i>
                <h5 className="mt-2">Purpose & Profit</h5>
                <p className="text-justify text-muted">Envato is not just about the bottom line. We’re a values-driven business that strives to have a positive impact 
                    on the lives of all of our stakeholders, from content creators and customers to staff and the wider global creative
                    community. It’s work, made with heart.
                </p>
            </div> 

            <div className="col-md-4 border-right">            
                <i className="fas fa-globe fa-3x mt-2"></i>
                <h5 className="mt-2">Global Impact</h5>
                <p className="text-justify text-muted">Envato is not just about the bottom line. We’re a values-driven business that strives to have a positive impact 
                    on the lives of all of our stakeholders, from content creators and customers to staff and the wider global creative
                    community. It’s work, made with heart.
                </p>
            </div> 

            <div className="col-md-4 ">             
            <i class="fas fa-user-friends fa-3x mt-2"></i>
                <h5 className="mt-2">Diverse & Inclusive</h5>
                <p className="text-justify text-muted">We’re committed to ensuring all our staff feel welcome, included and respected 
                    every day they work for Envato, by providing a caring, engaged and flexible work environment.
                </p>
            </div>                      
        </div>

        <div className="row mt-5">
            <div className="col-md-12">
                <h2 className="text-center text-primary">Working at Alpha DnD</h2>
                <p className="greyColor size22 text-center font-italic">Perfection is our goal, to achieve that we want people who are passionate and persistent.
                 We welcome those who thrive on challenges and learn from them. </p>
            </div>
        </div>
        

        <div className="row mt-4">
            <div className="col-md-6 mt-2 border-right ">            
                <h2 className="border-bottom ">Open Job Positions</h2>
                <ul>
                    <li className="list-group size22 mt-3">React Js Engineer</li>
                    <li className="list-group size22 mt-3">Node Js Engineer</li>
                    <li className="list-group size22 mt-3">Full Stack Js Engineer</li>
                    <li className="list-group size22 mt-3">Sr Software Engineer</li>
                </ul>
            </div>
            <div className="col-md-6" ><img src={Job} width="90%" height="80%" className="ml-3"/></div>
                      
        </div>

        </div>
        {/* container end */}
        <Footer />
        </div>
     );
}
 
export default Careers;