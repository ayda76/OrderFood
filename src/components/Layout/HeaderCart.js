import React,{useContext ,useState, useEffect}  from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCart.module.css';
import CartContext from '../../store/Card-Context'
function HeaderCart(props){
    const[highligthed,setHighligthed]=useState(false)
const ctx=useContext(CartContext);
const {items}=ctx;
 const cartCtx=items.reduce((currNumber,item)=>{
     return currNumber + item.amount;
 },0);

 const btnClass=`${classes.button} ${ highligthed ? classes.bump :''}`;
useEffect(()=>{
    if(items.length===0){
        return
    }
    setHighligthed(true); 
   const timer= setTimeout(()=>{
        setHighligthed(false); 
    },300);

    return ()=>{
        clearTimeout(timer)
    }
},[items])
return <button className={btnClass} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span className={classes.bump} >
        your cart
        </span>
    <span className={classes.badge} >
       {cartCtx}
        </span>
</button>
}
export default HeaderCart;