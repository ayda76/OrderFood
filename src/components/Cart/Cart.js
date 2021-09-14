import React,{useContext, useState} from'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Card-Context';
import CartItem from './CartItem';

function Cart(props){

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

    return (
        <Modal  onClick={props.onClick}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>close</button>
               {hasItem && <button className={classes.button}>order</button>} 
            </div>

        </Modal>
    );

}
export default Cart;