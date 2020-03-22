import React from 'react';


import './CurrentFood.css';
import fakeData from '../../fakeData/food';

const CurrentFood = (props) => {
    const {name,category,description,img,price}=props.food;
    console.log(props);

    
    return ( 
                <div className="main-part">              
                     <div className="food-item">
                     {
                      props.showingLunch && category==="Lunch" && 
                     <div className="food-details">
                         <img src={img}/>
                         <p>{name}</p>
                         <p>{description}</p>
                         <p>${price}</p>
                     </div>      
                     }       
                      {
                      props.showingDinner && category==="Dinner" && 
                     <div className="food-details">
                         <img src={img}/>
                         <p>{name}</p>
                         <p>{description}</p>
                         <p>${price}</p>
                     </div>      
                     }       
                                 
                 </div>   
            </div>
    
          
       
    );
};

export default CurrentFood;