import React from "react";
import './Loader.css';
function Loader(){
    return(
       <React.Fragment>
               <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
    </div>
       </React.Fragment> 
    );
}
export default Loader;
