import React,{useState} from 'react'
import styles from './checkout.modul.css'

const isEmpty=(value)=> value.trim()==='';
const isfiveChars=(value)=>value.trim().length===5;


function Checkout(props) {
    const [isconfirmed,setConfirmed]=useState({
        name:true,
        street:true,
        city:true,
        postalcode:true
    })
const [name,setname]=useState('');
const [street,setstreet]=useState('');
const [city,setcity]=useState('');
const [postalcode,setpostalcode]=useState('');

const nameChangeHandler =(event)=>{
setname(event.target.value);
}
const streetChangeHandler =(event)=>{
    setstreet(event.target.value);
    }
 const cityChangeHandler =(event)=>{
        setcity(event.target.value);
        }
 const postalcodeChangeHandler =(event)=>{
            setpostalcode(event.target.value);
            }



    const submitOrderHandler = (event)=>{
event.preventDefault();
const enteredname=!isEmpty(name);
const enteredstreet=!isEmpty(street);
const enteredcity=!isEmpty(city);
const enteredpostalcode=isfiveChars(postalcode);
const confirmedForm=enteredname &&enteredstreet && enteredcity && enteredpostalcode;

if(!confirmedForm){
    return;
}

    setConfirmed({
        name:enteredname,
        street:enteredstreet,
        city:enteredcity,
        postalcode:enteredpostalcode
    })


const order={
    name:name,
    street:street,
    postalcode:postalcode,
    city:city
}

props.onOrder(order);
    }
    return (
        <form onSubmit={submitOrderHandler}>
            <div className={`${styles.control} ${isconfirmed.name? '': styles.invalid}`}>
                <label htmlFor="name">name</label>
                <input id="name" type="text" onChange={nameChangeHandler}/>
                {!isconfirmed.name && <p>not valid</p>}
            </div>
            <div className={`${styles.control} ${isconfirmed.street? '': styles.invalid}`}>
                <label htmlFor="street">street</label>
                <input id="street" type="text" onChange={streetChangeHandler}/>
                {!isconfirmed.street && <p>not valid</p>}
            </div>
            <div className={`${styles.control} ${isconfirmed.postalcode? '': styles.invalid}`}>
                <label htmlFor="postalcode">postal code</label>
                <input id="postalcode" type="text" onChange={postalcodeChangeHandler}/>
                {!isconfirmed.postalcode && <p>not valid</p>}
            </div>
            <div className={`${styles.control} ${isconfirmed.city? '': styles.invalid}`}>
                <label htmlFor="city">city</label>
                <input id="city" type="text" onChange={cityChangeHandler}/>
                {!isconfirmed.city && <p>not valid</p>}
            </div>

            <button type="button" onClick={props.onclose}> cancel</button>
            <button > confirm</button>


        </form>
    )
}

export default Checkout
