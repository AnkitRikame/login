import React, { useState } from 'react';
import ChangePassword from './ChangePassword';
import {NavLink, Route} from 'react-router-dom';
import Navbar from './Navbar';
import {Link} from "react-router-dom";



// import {NavLink,Switch,Route} from "react-router-dom";

// import LoginForm from "./LoginForm";
function User (props) {
  const [details,setDetails] = useState(false);

    const openChangePassword = e =>{
      e.preventDefault();
      alert("Do you Really want to change Password?");
      setDetails(true);
      } 
  return (
    <>
    <Navbar />
    {details ? <Route exact path="/changepassword" component={ChangePassword} />: null} 
    <h3>Welcome,<span>{props.uname}</span></h3>
    <br/>
    <form>

      
        <div className='form-inner'>
          {/* <h2 >Admin Login </h2> */}
          <div className='form-group'>
            <label htmlFor='name'>Username : </label>
             <input
              type='text'
              name='name'
              id='name'
              value={props.uname}
              // onChange={e => setDetails({ ...details, name: e.target.value })}
              // value={details.name}
            />
          </div>
          
          {/* {error != '' ? <div className='error'>{error}</div> : ''} */}  
            <div className='form-group mt-2'>
              <label htmlFor='name'>Password : </label>
              <input
                style={{margin: "2px 6px"}}
                type='password'
                name='password'
                id='password'
                value={props.password}
               
              />
            </div>
            {/* {error != '' ? <div className='error'>{error}</div> : ''} */}
            <div className="" style={{display:"flex"}}>
          
              <Link to="/changepassword">
                {/* <Route exact path="/changepassword" component={ChangePassword} /> */}
                <input type='button' className='changePassword' value='Change Password' />
              </Link>
            <input type='button' className='Logout' value='Logout' to="/" onClick={()=>
                        {
                            props.logout();
                        }
                      }
                      />
      </div>
    </div>
  </form>
    </>
  )
}
export default User;
