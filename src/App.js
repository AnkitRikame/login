import React, { useState } from 'react';
import LoginForm from './LoginForm';
import {Switch,Route, Redirect} from 'react-router-dom';
import ChangePassword from './ChangePassword';
import Home from './Home';
import Task from './Task';
import User from './User';
import Error from './Error';

import './index.css';


function App () {

  // Main Admin User Details ...............
  const [adminUser, setadminUser] = useState({
    username: 'ankit',
    password: 'ankit123'
  })
  
  const [user, setUser] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const Login = details => {
    // console.log(details);
    if(details.name == adminUser.username && details.password == adminUser.password){
      // console.log("Authorised User");
      setUser ({
        name : details.name,
        password : details.password
      });
     
    }
    else{
      setError("Incorrect Username or Password*")
    }
  }

  const Logout = () => {
    // console.log('Logout')
    setUser({ name: '', password: '' })
  }

  // change Password
  const changePassHandler = (details) => {
    // console.log('Logout')
    setadminUser({...adminUser,password:details})
    setUser({ name: '', password: '' })
  }

  return (
    <>
    <div className=''>
      {user.name != '' ? (
            <Switch>
            <User exact path="/user"  uname={adminUser.username} password={adminUser.password} logout={Logout}/>
            
                {/* <Route exact path="/" component={LoginForm} /> */}
                  <Route exact path="/" component={Home}>
                    {/* <Redirect to="/home" /> */}
                  </Route>
                  <Route path="/task" component={Task} />
                  <Route path="/user" component={User} />
                  <Route path="/changepassword" render={(props) => (
                  <ChangePassword {...props} uname={adminUser.username} password={adminUser.password} changePass={changePassHandler} logout={Logout}/>)}/>
                  <Route component={Error} />  
            </Switch>
      ):(
        <div className="App">
            <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  </>
  );
};

export default App;
