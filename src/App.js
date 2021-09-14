import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import ContextProvder from "./store/ContextProvider";

function App() {
const [showCart, setShowCart]=useState(false);

const showCartHandler = () =>{
  setShowCart(true);
}

const hideCartHandler = () =>{
  setShowCart(false);
}

  return (
   <ContextProvder>
     {showCart &&  <Cart onClick={hideCartHandler}/>}
    
 
     <Header onClick={showCartHandler} />
     <Meals/>
   </ContextProvder>
  );
}

export default App;
