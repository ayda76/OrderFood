
import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

function BackDrop(props){

    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

function ModalOverLay(props){
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

function Modal(props){
   return (
<React.Fragment>
    {ReactDOM.createPortal(<BackDrop  onClick={props.onClick}/>,document.getElementById('overlay'))}
    {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,document.getElementById('overlay'))}
</React.Fragment>
   ); 
}
export default Modal;