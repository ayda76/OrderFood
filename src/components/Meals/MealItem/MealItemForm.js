import React, {useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

function MealItemForm(props){
const [inputAmount,setInputAmount]=useState('1');

const getInputHandler = (item) =>{
    setInputAmount(item)  
}
 const   submitHandler =(event)=>{
event.preventDefault();
const amount= +inputAmount;
if(amount.length===0 || amount<1){
    return
}
props.onAddtoCart(amount);
 }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input onChangeData={getInputHandler} input={{
             id:new Date(),
             label:'Amount',
             type: 'number',
             min:'1',
             step:'1',
             defaultValue:'1'
            }}/>
            <button type="submit">+ADD</button>
        </form>
    );
}
export default MealItemForm;