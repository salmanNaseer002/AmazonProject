import React, { useState, useEffect } from 'react';

import { read1 } from './apiCore';

import Timer from './Timer';
//import ProductReview from './ProductReview';

const TimerIsOn = () => {
    
    const [product, setProduct] = useState({});
    
    
    

    const[justEnd,setJustEnd] = useState(false);
    
    
    const loadSingleProduct = () => {
        read1().then(data => {
                
                console.log(data);
                setProduct(  data );
                // fetch related products
               
            
        });
    };

    useEffect(() => {
      loadSingleProduct();
    }, []);

    const update = () => {
        setJustEnd(true)
      }

    const TimerFunction = () =>{
        if(product.isSale == true){
          return <Timer endTime = {product.bidEnd} update={update}/>
        }
      }

    return (
     
       <div>
            {/* {TimerFunction()} */}
        
      </div>
    
        
    );
};

export default TimerIsOn;