import React from 'react';
import classes from './Input.module.css';

function Input(props){
   // const inputData=useRef();
   
    const getInputData=(event)=>{
        const data =event.target.value;
        console.log(data)
        props.onChangeData(data);
    }
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.input.label}</label>
            <input onChange={getInputData}  {...props.input}/>
        </div>
    );
}
export default Input;
