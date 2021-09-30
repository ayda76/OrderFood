import React,{useContext, useState} from'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Card-Context';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart(props){
    const[isChecked,setIschecked]=useState(false);
    const [isSubmited,setSubmit]=useState(false);
    const [finishedSubmit,setFinishSubmit]=useState(false);
    const ctx=useContext(CartContext);
const total=`$${ctx.totalAmount.toFixed(2)}`;
const hasItem=ctx.items.length>0;

const addHandler = (item) =>{
    item={...item,amount:1}
ctx.addItem(item);
}

const removeHandler = (id) =>{
   
    ctx.removeItem(id);
}
const cartItems=<ul>{
 ctx.items.map(
     (item)=>
     <CartItem
     key={item.id}
     id={item.id}
     name={item.name}
     price={item.price}
     amount={item.amount}
     onAdd={addHandler.bind(null,item)}
     onRemove={removeHandler.bind(null,item.id)}
/>)}</ul>;

 const orderCheckHandler=()=>{
    setIschecked(true); 
 }




 function orderHandler (userInfo){
     setSubmit(true);
  fetch('https://food-ordering-d5553-default-rtdb.firebaseio.com/orders.json',{
    method:'POST',
    body: JSON.stringify({
        customer:userInfo,
        order: ctx.items
    })
})
 setSubmit(false);
 setFinishSubmit(true);
setIschecked(true);
ctx.clear();
}



const contentCart=<React.Fragment>
      
   {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
           {isChecked &&  <Checkout onOrder={orderHandler} onclose={props.onClick}/>}
           
           {!isChecked &&
           <div className={classes.actions}>
           <button className={classes['button--alt']} onClick={props.onClick}>close</button>
          {hasItem && <button className={classes.button} onClick={orderCheckHandler}>order</button>} 
       </div>
           } 
</React.Fragment>;

const alerting=<React.Fragment>
    <p>successfully ordered!!!</p>
 <div className={classes.actions}>
           <button className={classes['button--alt']} onClick={props.onClick}>close</button>
       </div>
</React.Fragment>;


    return (
        
        <Modal  onClick={props.onClick}>
   { !isSubmited && !finishedSubmit &&contentCart}
   {finishedSubmit&&alerting}
        </Modal>
    );

}
export default Cart;