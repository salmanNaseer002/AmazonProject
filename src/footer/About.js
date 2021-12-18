import React from 'react';
import Layout from '../core/Layout';
import Footer from '../core/Footer';
import about from './aboutpic1.png'
import logo from  './aboutpic2.jpeg'
const  About = () => {
    return ( 
        <div> 
        <Layout 
             title="About"
             description="A low code to zero code software development platform for mobile and web development without writing a single line of code."
             className="container-fluid"
        />
        <div className="container">
        <div className="row ">
            <div className="col-md-9 mt-5">
            
            <h1><img src={logo} height="5%" width="5%"  className="mr-4"/>Futuristic Development</h1>
            <h3 className="text-justify mt-4">Bring your creative ideas to life with Alpha DnD Services.
            </h3>
            <p className="text-justify mt-4">Software Development has never been this easy before.
             A user can code any type of custom logic and bring its idea to real world solution.
             </p>
             <p className="text-justify mt-4">
              People should not need to worry about the coding logic. Alpha DnD is a complete solution 
              for all type of users from novice to expert. The asset and resources that AlphaDnD bring
              assist you to get your project done faster.              
             </p>
             <p className="text-justify mt-3">
             People all around the world will visit Alpha DnD to buy and sell creative assets, use smart design templates, 
             learn creative skills or even hire freelancers. With an industry-leading marketplace paired with an unlimited 
             subscription service, AlphaDnD helps creatives like you get projects done faster.
             Whether it's graphic templates, website themes, photos, video or audio, there's every chance you’ll spot something 
             from AlphaDnD today, from a café logo to a Hollywood title sequence!             
             </p>
             <h5 className="text-justify mt-4">AlphaDnD offers a variety of react based mobile themes, plugins 
                 and provide a platform to implement business solution & ideas.
            </h5>
            </div>
            <div className="col-md-3 mt-5">
                
                <img src={about} height="80%" width="90%" className="ml-3 mt-2" />
            </div>
        </div>
        


        </div>
        {/* container end */}
        <Footer />
        </div>
     );
}
 
export default About;