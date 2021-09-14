import React ,{useReducer}from 'react';
import CartContext from './Card-Context';

const defaultCart={
    items:[],
    totalAmount:0
};
const reducerCart = (state,action)=>{
    if(action.type==='ADD'){
        console.log(action.item);
        const updatedTotalAmount=state.totalAmount + action.item.amount*action.item.price;
        const expectedItemIndex=state.items.findIndex(item => item.id ===action.item.id);
        const exitingartItem=state.items[expectedItemIndex];
      
        let updatedItems;
        if(exitingartItem){
const updatedItem={...exitingartItem,amount: action.item.amount+ exitingartItem.amount}
updatedItems=[...state.items];
updatedItems[expectedItemIndex]=updatedItem;
        }
        else{
             updatedItems= state.items.concat(action.item);
        }


return {
    items:updatedItems,
    totalAmount:updatedTotalAmount
}

    }

    if(action.type==='REMOVE'){
   const existingItemIndex=state.items.findIndex(item => item.id ===action.id);
const existingItem=state.items[existingItemIndex];
const updatedTotalAmount=state.totalAmount-existingItem.price;
   let updatedItems;
   if(existingItem.amount===1){
    updatedItems=state.items.filter(item=> item.id!== action.id)
   }else{
    const   updatedItem={...existingItem,amount:existingItem.amount-1}
    updatedItems=[...state.items];
   updatedItems[existingItemIndex]=updatedItem;
   }

   return {
       items:updatedItems,
       totalAmount:updatedTotalAmount
       
   };
    }
return defaultCart;
}

function ContextProvder(props){
   const [reduceState,dispatchCart]= useReducer(reducerCart,defaultCart);
    const addItemHandler = (item)=>{
        dispatchCart({type:'ADD',item:item});
    }
    const removeItemHandler = (id)=>{
        dispatchCart({type:'REMOVE',id:id});
    }
const contextCart={
    items:reduceState.items,
    totalAmount:reduceState.totalAmount,
    addItem:addItemHandler,
    removeItem:removeItemHandler
};

    return <CartContext.Provider value={contextCart}>{props.children}</CartContext.Provider>
}
export default ContextProvder;