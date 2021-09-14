import React from 'react';
import MealsAvailable from './MealsAvailable';
import MealSummry from './MealSummry';

function Meals(){
    return <React.Fragment>
        <MealSummry/>
        <MealsAvailable/>
    </React.Fragment>
}
export default Meals;