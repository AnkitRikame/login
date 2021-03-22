import React, { useState } from 'react';
import {NavLink,Switch,Route,Redirect} from 'react-router-dom';
import User from './User';
import './index.css';


function LoginForm ({Login,error}) {
    const [details,setDetails] = useState({name:"" , password :""});
    
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }
  return (
    <>
      <form onSubmit={submitHandler}>
    
        <div className='form-inner'>
          <h2 >Admin Login </h2>
          <div className='form-group'>
            <label htmlFor='name'>Username : </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter Username ........'
              onChange={e => setDetails({ ...details, name: e.target.value }) 
            }
            
              value={details.name}
            />
          </div>
         
         
          {error != '' ? <div className='error'>{error}</div> : ''}
          
           
          
          <div className='form-group mt-2'>
            <label htmlFor='name'>Password :</label>
            <input
              style={{margin: "2px 6px"}}
              type='password'
              name='password'
              id='password'
              placeholder='Enter Password ........'
              onChange={e =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              
            />
          </div>
          {/* {error != '' ? <div className='error'>{error}</div> : ''} */}

          <input type='submit' className='submit' value='LOGIN' to="/" />
        </div>
      </form>

      
    </>
  );
};

export default LoginForm;
