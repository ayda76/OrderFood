import React,{useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/Card-Context';
function MealItem(props){
const ctx=useContext(CartContext);
const addCartItemHandler =(amount)=>{
ctx.addItem(
    {
      id:props.id,
      name:props.name,
      description:props.description,
      price:props.price ,
      amount:amount
    }
)
}

    return   <li className={classes.meal}>
      
        <div > <h3>{props.name}</h3></div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
        <div><MealItemForm onAddtoCart={addCartItemHandler} /></div>
    </li>;
 
}
export default MealItem;