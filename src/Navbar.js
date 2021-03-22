import React from "react";
import {NavLink} from "react-router-dom";
import './index.css';
const Navbar =() =>{
  return (
      <>
        <header className='navbar'>
                <div className='navbar__title'>
                    <NavLink to='/' ><img src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-black/bfa/bfa_code/bfa_code_flat-circle-white-on-black_512x512.png" width="30px" alt="logo" /></NavLink>
                </div>
                <div className='navbar__item'>
                    <NavLink exact to="/">Home</NavLink>
                </div>

                <div className='navbar__item'>
                    <NavLink exact to="/task">Task</NavLink>
                </div>

                <div className='navbar__item'>
                    <NavLink exact to="/user">User</NavLink>
                </div>

                
        </header>  
      </> 
  );
};

export default Navbar;
