import React, { useState } from 'react';
import Navbar from './Navbar';
import User from "./User";
import {Link} from "react-router-dom";

function ChangePassword(props) {


    const [details,setDetails] = useState("");  // taking username


        return (
            <>
                <Navbar/>
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
                        <label htmlFor='name'>New Password : </label>
                        <input
                            style={{margin: "2px 6px"}}
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter New Password'
                            onChange={e => setDetails(e.target.value )}
                            value={details}
                            
                        />

                        </div>
                        {/* {error != '' ? <div className='error'>{error}</div> : ''} */}
                        <div className="" style={{display:"flex"}}>
                    
                        <input type='button' className='changePassword' value='Save Password' onClick={()=>
                             { 
                               props.changePass(details);
                               console.log("Save password Clicked");
                             }
                             } 
                        />
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

export default ChangePassword;
