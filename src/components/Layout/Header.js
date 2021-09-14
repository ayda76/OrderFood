import React from 'react';
import HeaderStyle from './Header.module.css';
 import Image from '../../assets/eclair-3366430_1920.jpg'
import HeaderCart from './HeaderCart';
function Header(props){
return <React.Fragment>
    <header className={HeaderStyle.header}>
        <h1>React Meals</h1>
   <HeaderCart onClick={props.onClick}/>
    </header>
    <div className={HeaderStyle["main-image"]}>
<img src={Image}/>
    </div>
</React.Fragment>
}
export default Header;