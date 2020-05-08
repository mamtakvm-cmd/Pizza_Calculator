import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

const Home=()=>{
    return(
        <div>
             <div className="col">
            <h1>Order Pizza</h1>
            <div className="col-lg-4">
                <h3>Small Pizza </h3>
                <img src="https://i.ibb.co/1K4h0j7/small-pizza.jpg" alt="piza"/>
                <h4>Price is <i class="fa fa-inr"></i> 150</h4>

                
              
            </div>
            <div className="col-lg-4">{}
            <h3>Medium Pizza </h3>
            <img src="https://i.ibb.co/xhbKKSx/medium-pizza.jpg" alt="pizza"/>
            <h4>Price is <i class="fa fa-inr"></i> 200</h4>
           
            </div>
            <div className="col-lg-4">
            <h3>Large Pizza </h3>
            <img src= "https://i.ibb.co/FHPy0LJ/pizza.jpg" alt="pizza"/>
            <h4>Price is <i class="fa fa-inr"></i> 300</h4>
            
            </div>  
           
           
        </div>
       <div>
          
           <Link to ="/Form"><button className="btn btn-success" type="button">Order Now</button></Link>
      
       </div>
        </div>
        
    )
}

export default Home;