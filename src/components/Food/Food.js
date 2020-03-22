import React, { useState } from 'react';
import './Food.css';
import fakeData from '../../fakeData/food';
import CurrentFood from '../CurrentFood/CurrentFood';

const Food = () => {
    const [foods,setFoods]=useState(fakeData);
    

    const showingBreakfast=(food)=>{
        console.log('Button Clicked',food.category);
    }
    const showingLunch=()=>{
        console.log('Button Clicked');
    }
    const showingDinner=()=>{
        console.log('Button Clicked');
    }
    
    return (
        <div >
            <div className="all-button">
                <div className="breakfast-button">
                   <a href="#" type="button" onClick={showingBreakfast} className="active">Breakfast</a>
                </div>
                <div className="lunch-button">
                <a href="#" type="button" onClick={showingLunch}>Lunch</a>
                </div>
                <div className="dinner-button">
                <a href="#" type="button" onClick={showingDinner}>Dinner</a>
                </div>
            </div>
            <div className="food">
               {
                   foods.map(fd=><CurrentFood 
                    key={fd.key}
                    showingBreakfast={showingBreakfast}
                    showingDinner={showingDinner}
                    showingLunch={showingLunch}
                    food={fd}>      
                    </CurrentFood>)
               }
            </div>
        </div>
    );
};

export default Food;