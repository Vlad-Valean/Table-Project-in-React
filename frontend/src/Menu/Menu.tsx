import React, { useState } from 'react';
import './Menu.css';

function Menu() {
    const [isCollapsed, setState] = useState(false);
    
    interface props {
        href?: string;
        className: string;
        text?: string;
    }    

    const MenuButton = (props:props) => {
        return (
            <button 
                className={`${props.className} ${isCollapsed ? 'rotate' : 'unrotate'}`} 
                onClick={() => { setState(!isCollapsed) }}
            />          
        );
    }

    const NavButton = (props:props) => {
        return (
            <a href={props.href} className={`${props.className} generic-btn`}>
                <span style={isCollapsed ? {display: 'none'} : {display: 'inline-block'}}>{props.text}</span>
            </a>
        );
    }

    return (
        <div className={`menu-container ${isCollapsed ? 'colapse' : 'extend'}`}>
            <MenuButton className={'menu-btn fa fa-bars'}/>
            <NavButton href={'#users'} className={'fa fa-user'} text={'Users'}/>     
            <NavButton href={'#buy'} className={'fa fa-buy'} text={'Buy'}/>  
        </div>
    );
}

export default Menu;
